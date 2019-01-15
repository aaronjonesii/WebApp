import {Injectable, InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// Nebular Modules //
import {
  NbThemeModule, NbLayoutModule, NbSpinnerModule,
  NbThemeService, NbSidebarModule
} from '@nebular/theme';


const NEB_MODULES  = [
  NbThemeModule,
  NbLayoutModule, NbSpinnerModule, NbSidebarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NEB_MODULES,
  ],
  exports: [ NEB_MODULES ],
  providers: [ ]
})
export class NebularModule { }
