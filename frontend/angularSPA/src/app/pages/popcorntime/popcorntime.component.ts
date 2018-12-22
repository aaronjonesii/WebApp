import { Component, OnInit } from '@angular/core';
import { PopcorntimeService } from './popcorntime.service';

@Component({
  selector: 'anon-popcorntime',
  templateUrl: './popcorntime.component.html',
  styleUrls: ['./popcorntime.component.scss']
})
export class PopcorntimeComponent {

  title = 'Anonymous Systems API';
  movies = [{title: 'Loading Movies...'}];
  movie_img = '';
  next_page = '';
  prev_page = '';
  count = '';

  constructor(private backend_api: PopcorntimeService) { this.getMovies(); }

  getMovies = () => {
    this.backend_api.getMovies().subscribe(
      data => {
        // console.log(data)
        this.count = data.count;
        this.next_page = data.next;
        this.prev_page = data.previous;
        this.movies = data.results;
      },
      error => { console.log(error); }
    );
  }

//  FOR INFINITE LIST
  loadNext() {
    if (this.next_page) {
      this.backend_api.getMoreMovies(this.next_page)
        .subscribe(data => {
          this.movies.push(...data.results);
          this.next_page = data.next;
        }); }
  }

}
