import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { IpComponent } from './ip/ip.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { TodoComponent } from './todo/todo.component';
import { BottomSheetComponent } from './home/bottom-sheet/bottom-sheet.component';
import { PostComponent } from './blog/post/post.component';
import { ItemsComponent } from './todo/items/items.component';
import { ItemComponent } from './todo/item/item.component';
import { ListComponent } from './todo/list/list.component';
import { EditorComponent } from './blog/editor/editor.component';
import { LoadingComponent } from './loading/loading.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    BlogComponent,
    IpComponent,
    MusicComponent,
    MoviesComponent,
    TodoComponent,
    BottomSheetComponent,
    PostComponent,
    ItemsComponent,
    ItemComponent,
    ListComponent,
    EditorComponent,
    LoadingComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
