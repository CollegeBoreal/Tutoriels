import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomeComponent} from "./pages/home/home.component";
import {listComponent} from "./pages/list/list.component";


export const routes: RouterConfig = [
  { path: "", component: HomeComponent },
  { path: "list", component: listComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false })
];
