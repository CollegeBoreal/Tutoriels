var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var common_router_providers_1 = require('@angular/router/src/common_router_providers');
var ns_router_link_1 = require('./ns-router-link');
var ns_router_link_active_1 = require('./ns-router-link-active');
var page_router_outlet_1 = require('./page-router-outlet');
var ns_location_strategy_1 = require('./ns-location-strategy');
var ns_platform_location_1 = require('./ns-platform-location');
var router_extensions_1 = require('./router-extensions');
var trace_1 = require("../trace");
exports.routerTraceCategory = trace_1.routerTraceCategory;
var page_router_outlet_2 = require('./page-router-outlet');
exports.PageRoute = page_router_outlet_2.PageRoute;
var router_extensions_2 = require('./router-extensions');
exports.RouterExtensions = router_extensions_2.RouterExtensions;
exports.NS_ROUTER_PROVIDERS = [
    ns_location_strategy_1.NSLocationStrategy,
    core_1.provide(common_1.LocationStrategy, { useExisting: ns_location_strategy_1.NSLocationStrategy }),
    ns_platform_location_1.NativescriptPlatformLocation,
    core_1.provide(common_1.PlatformLocation, { useClass: ns_platform_location_1.NativescriptPlatformLocation }),
    router_extensions_1.RouterExtensions
];
exports.NS_ROUTER_DIRECTIVES = [
    ns_router_link_1.NSRouterLink,
    ns_router_link_active_1.NSRouterLinkActive,
    page_router_outlet_1.PageRouterOutlet
];
function nsProvideRouter(config, opts) {
    return exports.NS_ROUTER_PROVIDERS.concat(common_router_providers_1.provideRouter(config, opts));
}
exports.nsProvideRouter = nsProvideRouter;
;
//# sourceMappingURL=ns-router.js.map