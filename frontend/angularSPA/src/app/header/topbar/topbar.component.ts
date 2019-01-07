import { Component } from '@angular/core';
import { NbSidebarService, NbSearchService } from '@nebular/theme';
import { Router, Route } from '@angular/router';


@Component({
    selector: 'anon-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

    value = ''; // Search data placeholder
    subscription = '';

    constructor(
        private sidebarService: NbSidebarService,
        private searchService: NbSearchService,
        private router: Router,
        // private route: Route,
    ) {
        this.searchService.onSearchSubmit()
            .subscribe(data => {
                this.value = data.term;
                this.router.navigate(['/ip', this.value], {skipLocationChange: false});
                // this.ip_api.searchIp(this.value);
                console.log(this.router);
            });
    }

    // Top-Left Menu Button
    toggleSidebar() {
        this.sidebarService.toggle(true);
        return false;
    }

}
