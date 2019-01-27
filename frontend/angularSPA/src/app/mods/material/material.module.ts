import {Injectable, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules //
import {
  MatBottomSheet, MatBottomSheetConfig, MatBottomSheetContainer,
  MatBottomSheetModule, MatButtonModule, MatCardModule,
  MatIconModule, MatListModule, MatSidenavModule,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';
// Components
import { BottomSheet } from '../../home/home.component';
import { AdminComponent } from '../../admin/admin.component';

const MAT_MODULES  = [
  MatBottomSheetModule, MatListModule, MatSnackBarModule,
  MatButtonModule, MatCardModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule,
];

@Injectable({
  providedIn: 'root',
})
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    MAT_MODULES
  ],
  exports: [ MAT_MODULES ],
  entryComponents: [ BottomSheet ],
  providers: [ MatBottomSheet ],
})
export class MaterialModule { }
