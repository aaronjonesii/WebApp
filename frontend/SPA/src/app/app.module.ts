import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Nebular
import {
  NbThemeModule, NbLayoutModule, NbWindowModule,
  NbMenuModule, NbButtonModule, NbCardModule,
  NbCheckboxModule, NbBadgeModule, NbSearchModule, NbAlertModule,
} from '@nebular/theme';
// Material
import {MatBottomSheetModule, MatListModule} from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { IpComponent } from './ip/ip.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { ReplaceLineBreaksPipe } from './blog/replace-line-breaks.pipe';
import { TodoComponent } from './todo/todo.component';
import { BottomSheetComponent } from './home/bottom-sheet/bottom-sheet.component';
import { EvaPipe } from './home/bottom-sheet/eva.pipe';
import { PostComponent } from './blog/post/post.component';
import { ItemsComponent } from './todo/items/items.component';
import { ListComponent } from './todo/list/list.component';
import {FormsModule} from "@angular/forms";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './blog/editor/editor.component';
import { SafePipe } from './safe.pipe';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    BlogComponent,
    IpComponent,
    MusicComponent,
    MoviesComponent,
    ReplaceLineBreaksPipe,
    TodoComponent,
    BottomSheetComponent,
    EvaPipe,
    PostComponent,
    ItemsComponent,
    ListComponent,
    EditorComponent,
    SafePipe,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // Nebular
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule, NbWindowModule.forRoot(), NbCardModule,
    NbMenuModule.forRoot(), NbButtonModule, NbCardModule,
    NbCheckboxModule, NbBadgeModule, NbSearchModule,
    NbAlertModule,
    // Material
    MatBottomSheetModule, MatListModule,
  // Editors
    CKEditorModule,
  ],
  providers: [ ],
  entryComponents: [
    BottomSheetComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
