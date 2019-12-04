import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable()
export class BlogsService {
  private _data = data;

  get posts() {
    return this._data;
  }

  post(id: number) {
    return this._data.find(post => {
      return post.post_id === id
    });
  }
}
