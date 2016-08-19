"use strict";
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var router_2 = require("nativescript-angular/router");
var home_component_1 = require("./pages/home/home.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_2.NS_ROUTER_DIRECTIVES],
            template: "<page-router-outlet></page-router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
exports.routes = [
    { path: "", component: home_component_1.HomeComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.component.js.map