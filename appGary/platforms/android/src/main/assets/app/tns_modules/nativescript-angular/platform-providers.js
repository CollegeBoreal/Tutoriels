var frame_1 = require('ui/frame');
var page_1 = require('ui/page');
var di_1 = require('@angular/core/src/di');
var platform_1 = require("platform");
var animation_driver_1 = require('./animation-driver');
var animation_driver_2 = require("@angular/core/src/animation/animation_driver");
exports.APP_ROOT_VIEW = new di_1.OpaqueToken('App Root View');
exports.DEVICE = new di_1.OpaqueToken('platfrom device');
exports.defaultPageProvider = di_1.provide(page_1.Page, { useFactory: getDefaultPage });
function getDefaultPage() {
    var frame = frame_1.topmost();
    if (frame) {
        return frame.currentPage;
    }
    else {
        return null;
    }
}
exports.getDefaultPage = getDefaultPage;
exports.defaultFrameProvider = di_1.provide(frame_1.Frame, { useFactory: frame_1.topmost });
exports.defaultDeviceProvider = di_1.provide(exports.DEVICE, { useValue: platform_1.device });
exports.defaultAnimationDriverProvider = di_1.provide(animation_driver_2.AnimationDriver, { useClass: animation_driver_1.NativeScriptAnimationDriver });
//# sourceMappingURL=platform-providers.js.map