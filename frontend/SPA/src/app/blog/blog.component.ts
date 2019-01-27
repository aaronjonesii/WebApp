import {Component, Input, OnInit} from '@angular/core';
import { map, switchMap, startWith } from 'rxjs/operators';
import { BlogService } from './blog.service';
import {interval, Observable} from 'rxjs';
import { Posts } from './posts';

declare var eva: any;

@Component({
  selector: 'anon-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  count: 0;
  posts = [{title: 'Loading Blog Posts...'}];
  posts$: Observable<any>;w
  next_page: string;
  prev_page: string;

  constructor( private blog_api: BlogService ) {
  }
// https://www.apple.com/newsroom/
//


  ngOnInit(): void {
    // WORKING
    this.posts$ = this.blog_api.getPosts().pipe( map(data => data.results) );

    //  Render Eva icons
    setTimeout(() => eva.replace(), 500);
  }

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
    // console.log(item);
     return index;
  }



}
