import { Component, OnInit } from '@angular/core';
import { SpinnerConfig } from 'src/app/models';
import { AlbumsService } from './albums.service';
import { Album } from './models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  spinnerConfig = SpinnerConfig;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    })
  }

}
