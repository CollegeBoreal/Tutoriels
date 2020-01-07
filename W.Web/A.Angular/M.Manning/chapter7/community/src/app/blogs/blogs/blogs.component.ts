import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Post } from '../services/data';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  posts: Post[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.posts = this.blogsService.posts;
  }
}
