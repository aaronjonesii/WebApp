import { Component } from '@angular/core';
import { IpService } from "./ip.service";

@Component({
  selector: 'anon-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IpComponent {

  r = '';
  ip = '';
  temp = '';
  keys = [];

  constructor(private ip_api: IpService) {
    this.getIp();
  }

  getIp = () => {
    this.ip_api.getIp().subscribe(
        data => {
          // console.log(data.content);
          this.temp = data;
          this.r = data;
          this.ip = data.content.ip;
          for (const key in data.content) {this.keys.push(key);}
          // console.log(this.keys);
        },
        error => {
          console.log(error);
        }
    );
  }

}
