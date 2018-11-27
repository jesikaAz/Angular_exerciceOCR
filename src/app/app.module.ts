import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './PostListItemComponent/post.component';
import { ListPostComponent } from './PostListComponent/list-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
