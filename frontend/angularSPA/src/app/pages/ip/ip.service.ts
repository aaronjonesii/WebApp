import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class IpService {

  baseurl = 'http://127.0.0.1:8000/ip/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getIp(): Observable<any> {
    return this.http.get(this.baseurl, {headers: this.httpHeaders});
  }

}