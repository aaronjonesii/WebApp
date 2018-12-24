import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  json_obj = '';
  img = '';
  no_img = 'assets/imgs/img_not_available.png';
  transform(val: any, arg1: any) {
    // console.log(this.json_obj);
    this.json_obj = JSON.parse(val);
    this.img = this.json_obj[arg1];
    // if (typeof this.img !== 'undefined') { return this.no_img; }
    if ( this.img && this.img.includes('http') ) { return this.img; } else { return this.no_img; }

  }

}
