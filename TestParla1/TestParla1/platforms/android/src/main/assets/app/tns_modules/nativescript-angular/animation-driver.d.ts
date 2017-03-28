import { AnimationKeyframe } from '@angular/core/src/animation/animation_keyframe';
import { AnimationPlayer } from '@angular/core/src/animation/animation_player';
import { AnimationStyles } from '@angular/core/src/animation/animation_styles';
import { AnimationDriver } from '@angular/core/src/animation/animation_driver';
export declare class NativeScriptAnimationDriver implements AnimationDriver {
    computeStyle(element: any, prop: string): string;
    animate(element: any, startingStyles: AnimationStyles, keyframes: AnimationKeyframe[], duration: number, delay: number, easing: string): AnimationPlayer;
}
