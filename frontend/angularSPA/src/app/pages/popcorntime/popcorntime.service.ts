import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PopcorntimeService {

  baseurl = 'http://anonsys.tech:8000/movies/'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this.http.get(this.baseurl, {headers: this.httpHeaders});
  }

  getOneMovie(imdb_id): Observable<any> {
    return this.http.get(this.baseurl + imdb_id + '/', {headers: this.httpHeaders});
  }

  getMoreMovies(next_page): Observable<any> {
    return this.http.get(next_page);
  }

}
