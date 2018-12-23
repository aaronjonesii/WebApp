import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IpService } from "./ip.service";

@Component({
  selector: 'anon-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IpComponent {

  public query_ip: string;
  r = '';
  ip = '';
  temp = '';
  keys = [];

  constructor(
      private ip_api: IpService,
      private route: ActivatedRoute
  ) {
    this.query_ip = this.route.snapshot.paramMap.get('query_ip');
    if (this.query_ip) {  // Call API if not null
    // console.log('Parameter ->' + this.query_ip);
    this.searchIp(this.query_ip);
    } else {
    this.getIp();
    }
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

  searchIp = (query_ip) => {
      const reg_ipv4 = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
      const reg_ipv6 = /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/;
      if ( reg_ipv4.test( this.query_ip ) || reg_ipv6.test( this.query_ip ) ) {
        this.ip_api.searchIp(query_ip).subscribe(
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
       } else { this.ip = '[!] Invalid IP Address [!]'; }
  }

}
