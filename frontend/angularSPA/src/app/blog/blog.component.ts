import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService } from './blog.service';


@Component({
  selector: 'anon-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  count: 0;
  posts = [{title: 'Loading Blog Posts...'}];
  // posts$ = this.blog_api.getPosts().pipe(
  //   map(data => data.results)
  // );
  next_page: string;
  prev_page: string;

  constructor(
    private blog_api: BlogService,
  ) { this.getPosts(); }
// https://www.apple.com/newsroom/

  getPosts = () => {
    this.blog_api.getPosts().subscribe(
      data => {
        // console.log(data);
        this.count = data.count;
        this.next_page = data.next;
        this.prev_page = data.previous;
        this.posts = data.results;
      }, error => {
        console.log(error);
      }
    );
  }

  trackByFn(index, item) {
     return item.id;
  }

}
