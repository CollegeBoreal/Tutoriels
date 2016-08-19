"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
require("reflect-metadata");
var http_1 = require("@angular/http");
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map