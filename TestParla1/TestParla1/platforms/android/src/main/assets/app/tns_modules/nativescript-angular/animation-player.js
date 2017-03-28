var keyframe_animation_1 = require('ui/animation/keyframe-animation');
var view_1 = require("ui/core/view");
var enums = require("ui/enums");
var styleProperty = require('ui/styling/style-property');
var observable = require('ui/core/dependency-observable');
var types = require("utils/types");
var NativeScriptAnimationPlayer = (function () {
    function NativeScriptAnimationPlayer(element, keyframes, duration, delay, easing) {
        this._subscriptions = [];
        this._finished = false;
        this.parentPlayer = null;
        if (duration === 0) {
            duration = 0.01;
        }
        if (!(element instanceof view_1.View)) {
            throw new Error("NativeScript: Can animate only Views!");
        }
        this.target = element;
        var keyframeAnimationInfo = new keyframe_animation_1.KeyframeAnimationInfo();
        keyframeAnimationInfo.duration = duration;
        keyframeAnimationInfo.delay = delay;
        keyframeAnimationInfo.iterations = 1;
        keyframeAnimationInfo.curve = easing ? NativeScriptAnimationPlayer.animationTimingFunctionConverter(easing) : enums.AnimationCurve.ease;
        keyframeAnimationInfo.keyframes = new Array();
        keyframeAnimationInfo.isForwards = true;
        for (var _i = 0, keyframes_1 = keyframes; _i < keyframes_1.length; _i++) {
            var keyframe = keyframes_1[_i];
            var keyframeInfo = {};
            keyframeInfo.duration = keyframe.offset;
            keyframeInfo.declarations = new Array();
            for (var _a = 0, _b = keyframe.styles.styles; _a < _b.length; _a++) {
                var style = _b[_a];
                for (var substyle in style) {
                    var value = style[substyle];
                    var property = styleProperty.getPropertyByCssName(substyle);
                    if (property) {
                        if (typeof value === "string" && property.valueConverter) {
                            value = property.valueConverter(value);
                        }
                        keyframeInfo.declarations.push({ property: property.name, value: value });
                    }
                    else if (typeof value === "string" && substyle === "transform") {
                        NativeScriptAnimationPlayer.parseTransform(value, keyframeInfo);
                    }
                }
            }
            keyframeAnimationInfo.keyframes.push(keyframeInfo);
        }
        this.animation = keyframe_animation_1.KeyframeAnimation.keyframeAnimationFromInfo(keyframeAnimationInfo, observable.ValueSource.VisualState);
    }
    NativeScriptAnimationPlayer.prototype.onDone = function (fn) { this._subscriptions.push(fn); };
    NativeScriptAnimationPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._subscriptions.forEach(function (fn) { return fn(); });
            this._subscriptions = [];
        }
    };
    NativeScriptAnimationPlayer.prototype.play = function () {
        var _this = this;
        if (this.animation) {
            this.animation.play(this.target)
                .then(function () { _this._onFinish(); })
                .catch(function (e) { });
        }
    };
    NativeScriptAnimationPlayer.prototype.pause = function () {
        throw new Error("AnimationPlayer.pause method is not supported!");
    };
    NativeScriptAnimationPlayer.prototype.finish = function () {
        throw new Error("AnimationPlayer.finish method is not supported!");
    };
    NativeScriptAnimationPlayer.prototype.reset = function () {
        if (this.animation && this.animation.isPlaying) {
            this.animation.cancel();
        }
    };
    NativeScriptAnimationPlayer.prototype.restart = function () {
        this.reset();
        this.play();
    };
    NativeScriptAnimationPlayer.prototype.destroy = function () {
        this.reset();
        this._onFinish();
    };
    NativeScriptAnimationPlayer.prototype.setPosition = function (p) {
        throw new Error("AnimationPlayer.setPosition method is not supported!");
    };
    NativeScriptAnimationPlayer.prototype.getPosition = function () {
        return 0;
    };
    NativeScriptAnimationPlayer.animationTimingFunctionConverter = function (value) {
        switch (value) {
            case "ease":
                return enums.AnimationCurve.ease;
            case "linear":
                return enums.AnimationCurve.linear;
            case "ease-in":
                return enums.AnimationCurve.easeIn;
            case "ease-out":
                return enums.AnimationCurve.easeOut;
            case "ease-in-out":
                return enums.AnimationCurve.easeInOut;
            case "spring":
                return enums.AnimationCurve.spring;
            default:
                if (value.indexOf("cubic-bezier(") === 0) {
                    var bezierArr = value.substring(13).split(/[,]+/);
                    if (bezierArr.length !== 4) {
                        throw new Error("Invalid value for animation: " + value);
                    }
                    return enums.AnimationCurve.cubicBezier(NativeScriptAnimationPlayer.bezieArgumentConverter(bezierArr[0]), NativeScriptAnimationPlayer.bezieArgumentConverter(bezierArr[1]), NativeScriptAnimationPlayer.bezieArgumentConverter(bezierArr[2]), NativeScriptAnimationPlayer.bezieArgumentConverter(bezierArr[3]));
                }
                else {
                    throw new Error("Invalid value for animation: " + value);
                }
        }
    };
    NativeScriptAnimationPlayer.bezieArgumentConverter = function (value) {
        var result = parseFloat(value);
        result = Math.max(0.0, result);
        result = Math.min(1.0, result);
        return result;
    };
    NativeScriptAnimationPlayer.transformConverter = function (value) {
        if (value === "none") {
            var operations = {};
            operations[value] = value;
            return operations;
        }
        else if (types.isString(value)) {
            var operations = {};
            var operator = "";
            var pos = 0;
            while (pos < value.length) {
                if (value[pos] === " " || value[pos] === ",") {
                    pos++;
                }
                else if (value[pos] === "(") {
                    var start = pos + 1;
                    while (pos < value.length && value[pos] !== ")") {
                        pos++;
                    }
                    var operand = value.substring(start, pos);
                    operations[operator] = operand.trim();
                    operator = "";
                    pos++;
                }
                else {
                    operator += value[pos++];
                }
            }
            return operations;
        }
        else {
            return undefined;
        }
    };
    NativeScriptAnimationPlayer.parseTransform = function (value, animationInfo) {
        var newTransform = NativeScriptAnimationPlayer.transformConverter(value);
        var array = new Array();
        var values = undefined;
        for (var transform in newTransform) {
            switch (transform) {
                case "scaleX":
                    animationInfo.declarations.push({ property: "scale", value: { x: parseFloat(newTransform[transform]), y: 1 } });
                    break;
                case "scaleY":
                    animationInfo.declarations.push({ property: "scale", value: { x: 1, y: parseFloat(newTransform[transform]) } });
                    break;
                case "scale":
                case "scale3d":
                    values = newTransform[transform].split(",");
                    if (values.length === 2 || values.length === 3) {
                        animationInfo.declarations.push({ property: "scale", value: { x: parseFloat(values[0]), y: parseFloat(values[1]) } });
                    }
                    break;
                case "translateX":
                    animationInfo.declarations.push({ property: "translate", value: { x: parseFloat(newTransform[transform]), y: 0 } });
                    break;
                case "translateY":
                    animationInfo.declarations.push({ property: "translate", value: { x: 0, y: parseFloat(newTransform[transform]) } });
                    break;
                case "translate":
                case "translate3d":
                    values = newTransform[transform].split(",");
                    if (values.length === 2 || values.length === 3) {
                        animationInfo.declarations.push({ property: "translate", value: { x: parseFloat(values[0]), y: parseFloat(values[1]) } });
                    }
                    break;
                case "rotate":
                    var text = newTransform[transform];
                    var val = parseFloat(text);
                    if (text.slice(-3) === "rad") {
                        val = val * (180.0 / Math.PI);
                    }
                    animationInfo.declarations.push({ property: "rotate", value: val });
                    break;
                case "none":
                    animationInfo.declarations.push({ property: "scale", value: { x: 1, y: 1 } });
                    animationInfo.declarations.push({ property: "translate", value: { x: 0, y: 0 } });
                    animationInfo.declarations.push({ property: "rotate", value: 0 });
                    break;
            }
        }
        return array;
    };
    return NativeScriptAnimationPlayer;
}());
exports.NativeScriptAnimationPlayer = NativeScriptAnimationPlayer;
//# sourceMappingURL=animation-player.js.map