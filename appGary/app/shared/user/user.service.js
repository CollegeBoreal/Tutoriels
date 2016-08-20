"use strict";
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        alert("About to register: " + user.email);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map