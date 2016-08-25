"use strict";
var list_component_1 = require("./pages/list/list.component");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
exports.routes = [
    { path: "", component: login_component_1.LoginPage },
    { path: "list", component: list_component_1.ListPage }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map