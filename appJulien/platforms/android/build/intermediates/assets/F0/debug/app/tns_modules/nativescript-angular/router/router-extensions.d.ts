import { Router, UrlTree } from "@angular/router";
import { NavigationExtras } from "@angular/router/src/router";
import { NSLocationStrategy, NavigationOptions } from "./ns-location-strategy";
import { Frame } from "ui/frame";
export declare type ExtendedNavigationExtras = NavigationExtras & NavigationOptions;
export declare class RouterExtensions {
    router: Router;
    locationStrategy: NSLocationStrategy;
    frame: Frame;
    constructor(router: Router, locationStrategy: NSLocationStrategy, frame: Frame);
    navigate(commands: any[], extras?: ExtendedNavigationExtras): Promise<boolean>;
    navigateByUrl(url: string | UrlTree, options?: NavigationOptions): Promise<boolean>;
    back(): void;
    backToPreviousPage(): void;
    canGoBackToPreviousPage(): void;
}
