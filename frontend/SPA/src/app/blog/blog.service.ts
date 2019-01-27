import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Post, Posts } from './posts';
import {catchError} from "rxjs/operators";

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
    return this.http.get<Posts>(this.postsURL, {headers: this.httpHeaders});
  }

  getOnePost(postID): Observable<any> {
    return this.http.get<Post>(this.postsURL + postID + '/', {headers: this.httpHeaders});
  }

  createPost(post): Observable<Post> {
    return this.http.post<Post>(this.postsURL + '/', post, {headers: this.httpHeaders});
  }

  updatePost(postID, post): Observable<Post> {
    return this.http.put<Post>(this.postsURL + postID + '/', post, {headers: this.httpHeaders});
  }

  deletePost(postID): Observable<Post> {
    return this.http.delete<Post>(this.postsURL + postID + '/', {headers: this.httpHeaders});
  }


}
