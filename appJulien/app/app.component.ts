import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}

export const routes: RouterConfig = [
    {path: "", component: HomeComponent}
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes,{})
];