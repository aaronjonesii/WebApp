import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {
  json_obj = '';
  transform(val) {
    this.json_obj = JSON.parse(val);
    // console.log(this.json_obj)
    return this.json_obj.poster;
  }

}
