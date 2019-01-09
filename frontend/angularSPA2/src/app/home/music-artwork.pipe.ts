import { Pipe, PipeTransform } from '@angular/core';

declare var MusicKit: any;

@Pipe({
  name: 'musicArtwork'
})
export class MusicArtworkPipe implements PipeTransform {

  transform( artworkURL: string, desiredDimension: number ): string{
    if ( !artworkURL ) {
      return './assets/imgs/img_not_available.png';
    }
    return MusicKit.formatArtworkURL( { 'url': artworkURL }, desiredDimension, desiredDimension );
  }

}
