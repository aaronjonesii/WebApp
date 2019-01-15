import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MusicplayerService, PlaybackStates } from '../../services/musicplayer.service';
import { SongModel } from '../../models/song-model';


@Component({
  selector: 'anon-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  @Input() songData: SongModel;
  @Input() albumView = false;
  @Input() queueView = false;
  @Input() rank = 0;
  @Output() uponPlay: EventEmitter<any> = new EventEmitter();
  @Output() uponRemove: EventEmitter<any> = new EventEmitter();

  isHovering = false;
  isSelected = false;
  isAction = false;
  playbackStates = PlaybackStates;
  isReleased = true;
  isSong = true;

  constructor(
      private playerService: MusicplayerService,
  ) { }

  ngOnInit() {
    this.isSong = this.songData.type !== 'music-videos';
    const currentDate = new Date().getTime();
    const songDate = Date.parse(this.songData.attributes.releaseDate);
    if ( songDate > currentDate ) {
      this.isReleased = false;
    }

    this.checkIfSelected();
    this.playerService.addMediaChangeListener( this.checkIfSelected.bind(this) );
  }

  checkIfSelected() {
    if ( this.queueView ) {
      return false;
    }
    this.isSelected = this.songData.id === this.playerService.nowPlayingItem.id ||
                      this.songData.id === this.playerService.nowPlayingItem.container.id ||
                      this.songData.id === this.playerService.nowPlayingItem.collectionId;
  }

  songClicked(): void {
    this.uponPlay.emit();
  }

  // playNext(): void {
  //   this.playerService.playNext( this.songData );
  //   this.snackBar.openFromComponent(QueueSnackBarComponent, {
  //     duration: 1000
  //   });
  // }
  //
  // playLater(): void {
  //   this.playerService.playLater( this.songData );
  //   this.snackBar.openFromComponent(QueueSnackBarComponent, {
  //     duration: 1000
  //   });
  // }

}
