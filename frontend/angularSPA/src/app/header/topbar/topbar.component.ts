import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbSearchService } from '@nebular/theme';

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
    ) {
      this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
      })
    }


  // Top-Left Menu Button
  toggleSidebar() {
    this.sidebarService.toggle(true);
    return false;
  }
    
}
