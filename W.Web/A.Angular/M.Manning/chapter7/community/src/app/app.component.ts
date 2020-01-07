import { Component } from '@angular/core';
import { ChatBotService } from './services/chat-bot.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ChatBotService,
    UserService
  ]
})
export class AppComponent {
  loggedIn: boolean = false;

  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();
  }
}
