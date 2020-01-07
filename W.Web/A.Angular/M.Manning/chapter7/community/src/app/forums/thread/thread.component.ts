import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum, Thread } from '../services/data';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  forum: Forum;
  thread: Thread;

  constructor(private route: ActivatedRoute, private forumsService: ForumsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let forum = this.route.snapshot.parent.params['forum_alias'];
      this.thread = this.forumsService.thread(forum, params['thread_alias']);
    });
  }
}
