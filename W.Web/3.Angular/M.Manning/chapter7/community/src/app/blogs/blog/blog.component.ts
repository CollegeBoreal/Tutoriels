import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogsService } from '../services/blogs.service';
import { Post } from '../services/data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  post: Post;
  post_id: number;
  lines: string[];
  canNext: boolean = true;
  canPrev: boolean = true;

  constructor(private route: ActivatedRoute, private blogsService: BlogsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.post_id = Number.parseInt(params['post_id']);
      this.post = this.blogsService.post(this.post_id);
      this.lines = this.post.content.split('\n').filter(line => line.length);
      this.canPrev = (this.post_id > 1);
      this.canNext = (this.post_id < (this.blogsService.posts.length));
    });
  }
}
