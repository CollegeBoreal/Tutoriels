import { Type } from '@angular/core/src/facade/lang';
import { RouterConfig } from '@angular/router';
import { ExtraOptions } from '@angular/router/src/common_router_providers';
export { routerTraceCategory } from "../trace";
export { PageRoute } from './page-router-outlet';
export { RouterExtensions } from './router-extensions';
export declare const NS_ROUTER_PROVIDERS: any[];
export declare const NS_ROUTER_DIRECTIVES: Type[];
export declare function nsProvideRouter(config: RouterConfig, opts: ExtraOptions): any[];
