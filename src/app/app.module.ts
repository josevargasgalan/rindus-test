import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from 'src/api/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponentModule } from './components/posts/posts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponentModule } from './components/menu/menu.module';
import { AlbumsComponentModule } from './components/albums/albums.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsComponentModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuComponentModule,
    AlbumsComponentModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
