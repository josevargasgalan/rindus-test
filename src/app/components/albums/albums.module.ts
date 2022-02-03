import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  declarations: [AlbumsComponent, AlbumComponent],
  imports: [CommonModule],
  exports: [AlbumsComponent]
})
export class AlbumsComponentModule { }
