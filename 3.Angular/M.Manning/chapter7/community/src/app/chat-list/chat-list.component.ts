import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumsService } from '../forums/services/forums.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  users: any[];
  talkTo: string;

  constructor(
    private router: Router,
    private forumsService: ForumsService) { }

  ngOnInit() {
    this.users = this.forumsService.users;
  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }
}
