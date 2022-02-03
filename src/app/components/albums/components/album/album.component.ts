import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../models';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album = {
    userId: 0,
    id: 0,
    title: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
