import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlbumsComponent } from './albums.component';
import { AlbumsService } from './albums.service';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  declarations: [AlbumsComponent, AlbumComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  providers: [AlbumsService],
  exports: [AlbumsComponent]
})
export class AlbumsComponentModule { }
