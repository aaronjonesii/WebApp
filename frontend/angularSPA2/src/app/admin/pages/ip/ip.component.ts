import { ActivatedRoute, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IpService } from "./ip.service";

@Component({
  selector: 'anon-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IpComponent implements OnInit{

  loading = true;

  public query_ip: string;
  r = '';
  ip = '';
  ip_loc = '';
  temp = '';
  keys = [];
  map_url = '';

  constructor(
      private ip_api: IpService,
      private activatedroute: ActivatedRoute,
      // private route: Route,
  ) {
    this.query_ip = this.activatedroute.snapshot.paramMap.get('query_ip'); // Get parameter from url
  }

  ngOnInit(): void {
      if (this.query_ip) {  // if parameter url is not null
    // console.log('Parameter ->' + this.query_ip);
    this.searchIp(this.query_ip); // Get IP info from search
    } else {
    this.getIp(); // Get IP info from client
    };
  }
  getIp = () => {
    this.ip_api.getIp().subscribe(
        data => {
          // console.log(data.content);
          this.temp = data;
          this.r = data;
          this.ip = data.content.ip;
          this.ip_loc = data.content.loc;
          if (this.ip_loc == null) { this.ip_loc = '37.235000,-115.811111'; }
          this.map_url = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyD7BOo5oZNKU0PrkVk5_x9LVTJtLb4JNeY&center=' + this.ip_loc + '&zoom=12&maptype=satellite';
          for (const key in data.content) {this.keys.push(key);};
          this.loading = false;
          // console.log(this.map_url);
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
              // this.temp = data;
              this.r = data;
              this.ip = data.content.ip;
              this.ip_loc = data.content.loc;
              if (this.ip_loc == null) { this.ip_loc = '37.235000,-115.811111'; }
              this.map_url = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyD7BOo5oZNKU0PrkVk5_x9LVTJtLb4JNeY&center=' + this.ip_loc + '&zoom=12&maptype=satellite';
              for (const key in data.content) {this.keys.push(key); };
              this.loading = false;
              // console.log(this.keys);
            },
            error => {
              console.log(error);
            }
        );
       } else { this.ip = '[!] Invalid IP Address [!]'; }
  }

}
