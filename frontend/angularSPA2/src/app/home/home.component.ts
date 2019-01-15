import { Component, Inject, OnInit } from '@angular/core';
import { MusickitapiService } from './musickit/services/musickitapi.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PopcorntimeComponent } from '../admin/pages/popcorntime/popcorntime.component';
import { PopcorntimeService } from '../admin/pages/popcorntime/popcorntime.service';
import { MusicplayerService, PlaybackStates } from './musickit/services/musicplayer.service';

// declare var MusicKit: any;

@Component({
  selector: 'anon-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  musicKit: any;
  title = 'Landing';
  images = [1, 2, 3].map(() => `https://picsum.photos/1450?random&t=${Math.random()}`);
  public playbackStates = PlaybackStates;
  topSongs = [];
  topAlbums = [];
  topPlaylists = [];
  isLoading = true;

  // Popconrtime Varibales below:
  movies = [{title: 'Loading Movies...'}];
  movie_img = '';
  next_page = '';
  prev_page = '';
  count = '';
  movies_loading = true;

  constructor( private apiService: MusickitapiService,
               private playerService: MusicplayerService,
               private sanitizer: DomSanitizer,
               private popcorntime: PopcorntimeComponent,
               private backend_api: PopcorntimeService,
  ) {
    this.getMovies();
    this.movies_loading = false;
  }

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

  loadNext() {
    if (this.next_page) {
      this.backend_api.getMoreMovies(this.next_page)
          .subscribe(data => {
            this.movies.push(...data.results);
            this.next_page = data.next;
          }); }
  }

  ngOnInit() {
    // https://itunes.apple.com/us/album/falling-feat-blackbear/1446517452?i=1446517454
    // https://developer.apple.com/documentation/musickitjs/musickit
    // https://developer.apple.com/documentation/musickitjs/accessing_musickit_features_using_javascript
    // https://github.com/naveedgol/apple-music-web-player
    // https://developer.apple.com/documentation/musickitjs/adding_musickit_features_using_html#overview
    // https://itunes.apple.com/us/playlist/car-11-30-2017/pl.u-ReeWTxY2oL7
    //
    this.apiService.fetchChart().subscribe( data => {
      this.topAlbums = data.albums[0].data;
      this.topPlaylists = data.playlists[0].data;
      this.topSongs = data.songs[0].data;
      this.isLoading = false;
      // console.log(this.topSongs);
    });
  }

  playSong( trackIndex: number ): void {
    this.playerService.setQueueFromItems( this.topSongs, trackIndex ).subscribe();
  }

  get currentPlaybackDuration(): number {
    return this.playerService.currentPlaybackDuration;
  }

  get currentPlaybackTime(): number {
    return this.playerService.currentPlaybackTime;
  }

  togglePlayPause(): void {
    if ( this.playerService.playbackState === this.playbackStates.PAUSED ) {
      this.playerService.play().subscribe();
    } else {
      this.playerService.pause().subscribe();
    }
  }

  skipToNextItem(): void {
    this.playerService.skipToNextItem().subscribe();
  }

  skipToPreviousItem(): void {
    this.playerService.skipToPreviousItem().subscribe();
  }

  seekToTime( time: number ): void {
    this.playerService.seekToTime( time ).subscribe();
  }


  safestyleImage(imgURL) {
    return this.sanitizer.bypassSecurityTrustStyle('url("' + imgURL + '")');
  }

}
