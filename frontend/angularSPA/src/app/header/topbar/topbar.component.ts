import { Component } from '@angular/core';
import { NbSidebarService, NbSearchService } from '@nebular/theme';
import { Router } from '@angular/router';


@Component({
  selector: 'anon-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  value = ''; // Search data placeholder

  constructor(
    private sidebarService: NbSidebarService,
    private searchService: NbSearchService,
    private router: Router,
    ) {
      this.searchService.onSearchSubmit()
      .subscribe(data => {
        this.value = data.term;
        this.router.navigate(['/ip', this.value]);
        // this.ip_api.searchIp(this.value);
      });
    }


  // Top-Left Menu Button
  toggleSidebar() {
    this.sidebarService.toggle(true);
    return false;
  }
}
