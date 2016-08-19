"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    //public router:Router;
    function HomeComponent(_router, page) {
        this._router = _router;
        this.page = page;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onTap = function () {
        //this.router.navigate(["/"]);
        // alert(String(this._router==null));
        this._router.navigate(["/list"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./pages/home/home.component.html",
            styleUrls: ["./pages/home/home.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map