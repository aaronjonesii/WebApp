import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplemusickitService } from './applemusickit.service';
import { Observable, from } from 'rxjs';

declare var MusicKit: any;

@Injectable({
  providedIn: 'root'
})
export class MusickitapiService {

  constructor(
      private musicKitService: ApplemusickitService,
      private http: HttpClient,
  ) { }

  API_URL = 'https://api.music.apple.com';

   getApiHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.musicKitService.musicKit.developerToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Music-User-Token': this.musicKitService.musicKit.musicUserToken
    });
  }

    fetchChart(): Observable<any> {
    const searchTypes = ['songs', 'albums', 'playlists'];
    return from( this.musicKitService.musicKit.api.charts( null, { types: searchTypes, limit: 10 } ) );
  }

}
