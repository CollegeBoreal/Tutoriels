"use strict";
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./pages/home/home.component");
var list_component_1 = require("./pages/list/list.component");
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "list", component: list_component_1.listComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, { enableTracing: false })
];
//# sourceMappingURL=app.routes.js.map