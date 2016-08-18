"use strict";
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.counter = 16;
    }
    Object.defineProperty(HomeComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "!!Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onTap = function () {
        this.counter--;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./pages/home/home.component.html",
            styleUrls: ["./pages/home/home.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map