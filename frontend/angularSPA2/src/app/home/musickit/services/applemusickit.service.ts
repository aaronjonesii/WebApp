import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

declare var MusicKit: any;

@Injectable({
  providedIn: 'root'
})
export class ApplemusickitService {

    musicKit: any;
    isAuthorized = false;

  constructor() {
        MusicKit.configure({
          developerToken: environment.token,
          app: {
            name: 'Music Player',
            build: '2019.1'
          }
        });

        this.musicKit = MusicKit.getInstance();
  }
}
