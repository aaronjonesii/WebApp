import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BlogService {

  // postsURL = 'http://anonsys.tech:8000/posts'
  postsURL = 'http://localhost:8000/posts/'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    return this.http.get(this.postsURL, {headers: this.httpHeaders});
  }

  getOnePost(postURL): Observable<any> {
    return this.http.get(postURL, {headers: this.httpHeaders});
  }



}
