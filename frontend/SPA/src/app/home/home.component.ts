import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NbWindowRef, NbWindowService} from '@nebular/theme';
import { IpComponent } from '../ip/ip.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import Typed from 'typed.js';

declare var eva: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  today = new Date();

  typed: any;
  options = {
    strings: ['Anonymous Systems', 'The LionsDen 🦁'],
    typeSpeed: 80,
    showCursor: false,
    fadeOut: true,
    loop: true,
    backDelay: 10000
  };



  constructor(
    private windowService: NbWindowService,
    private bottomSheet: MatBottomSheet,
  ) {
    // Refresh time every second
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent, {
      panelClass: ['bg-dark'],
      ariaLabel: 'WebApp Navigation'
      });
  }

  ngOnInit(): void {

    this.typed = new Typed('.element', this.options);

    // Because Eva icons are used in this component
    eva.replace();
    }



}
