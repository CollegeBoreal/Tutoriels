import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";
/*This line below was added by myself to fix the error saying that it could not fin @Component */
import {Component} from "@angular/core";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class LoginPage {
  user: User;
  isLoggingIn = true;

constructor(private _router: Router, private _userService: UserService) {
  this.user = new User();
}
  submit() {
  if (this.isLoggingIn) {
    this.login();
  } else {
    this.signUp();
  }
}
login() {
  this._userService.login(this.user)
    .subscribe(
      () => this._router.navigate(["/list"]),
      (error) => alert("Unfortunately we could not find your account.")
    );
}
signUp() {
  this._userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
    );
}
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}