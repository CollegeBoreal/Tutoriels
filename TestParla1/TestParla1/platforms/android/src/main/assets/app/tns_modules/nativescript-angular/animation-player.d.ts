import { AnimationKeyframe } from '@angular/core/src/animation/animation_keyframe';
import { AnimationPlayer } from '@angular/core/src/animation/animation_player';
import { KeyframeInfo } from 'ui/animation/keyframe-animation';
import styleProperty = require('ui/styling/style-property');
export declare class NativeScriptAnimationPlayer implements AnimationPlayer {
    parentPlayer: AnimationPlayer;
    private _subscriptions;
    private _finished;
    private animation;
    private target;
    constructor(element: Node, keyframes: AnimationKeyframe[], duration: number, delay: number, easing: string);
    onDone(fn: Function): void;
    private _onFinish();
    play(): void;
    pause(): void;
    finish(): void;
    reset(): void;
    restart(): void;
    destroy(): void;
    setPosition(p: any): void;
    getPosition(): number;
    static animationTimingFunctionConverter(value: any): any;
    static bezieArgumentConverter(value: any): number;
    static transformConverter(value: any): Object;
    static parseTransform(value: string, animationInfo: KeyframeInfo): styleProperty.KeyValuePair<styleProperty.Property, any>[];
}
