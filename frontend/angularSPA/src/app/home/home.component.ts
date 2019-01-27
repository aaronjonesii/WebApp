import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef, MatBottomSheetConfig } from '@angular/material';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  today = new Date();

  constructor(
      public snackBar: MatSnackBar,
      private bottomSheet: MatBottomSheet,
      ) {
    // Refresh time every second
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }


  ngOnInit() {
  }

   openBottomSheet(): void {
    this.bottomSheet.open(BottomSheet, {
      panelClass: ['bg-dark'],
      ariaLabel: 'WebApp Navigation'
    });
  }
}

declare var eva: any;
@Component({
  selector: 'anon-snack',
  providers: [],
  template: `
    <mat-nav-list class="">
      <a href="#" class="eva-parent-hover text-muted" mat-list-item (click)="bottomSheetRef.dismiss()">
        <span mat-line>Admin Dashboard <span class="text-primary">(Coming Soon)</span> </span>
        <span mat-line>Administrator Dashboard to manage this WebApp.</span>
        <i class="icon icon-disabled" data-eva="browser-outline" data-eva-animation="none"></i>
      </a>
      <a routerLink="music" class="eva-parent-hover" mat-list-item (click)="bottomSheetRef.dismiss()">
        <span mat-line>Apple Music Player</span>
        <span mat-line>Browse Apple Music Top Charts or play music from your account.</span>
        <i class="icon" data-eva="music-outline"></i>
      </a>
      <a routerLink="blog" class="eva-parent-hover" mat-list-item (click)="bottomSheetRef.dismiss()">
        <span mat-line>Blog</span>
        <span mat-line>Posts for to track and note daily activities.</span>
        <i class="icon" data-eva="list-outline"></i>
      </a>
      <a routerLink="ip" class="eva-parent-hover" mat-list-item (click)="bottomSheetRef.dismiss()">
        <span mat-line>IP Lookup</span>
        <span mat-line>Enter IP Address to get location information.</span>
        <i class="icon" data-eva="globe-outline"></i>
      </a>
      <a routerLink="movies" class="eva-parent-hover" mat-list-item (click)="bottomSheetRef.dismiss()">
        <span mat-line>Movie Library</span>
        <span mat-line>Movie collection of 10,000+ with download links.</span>
        <i class="icon" data-eva="film-outline"></i>
      </a>
    </mat-nav-list>
  `,
  styles: [`
      mat-nav-list > a {color: white;}
      .icon-disabled { fill: #7f8177!important; }
  `],
})
export class BottomSheet implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheet>) { }

ngOnInit(): void {
    // Customize Eva Icons for Bottom Sheet
    eva.replace({
      fill: '#5bc0de',
      animation: {
        type: 'pulse',
        hover: true,
        infinite: true,
      }
    });
}

}
