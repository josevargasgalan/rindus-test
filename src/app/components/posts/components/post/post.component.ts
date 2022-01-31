import { Component, Input, OnInit } from '@angular/core';
import { PhotoUrl, Post } from '../../models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  };

  constructor() { }

  ngOnInit(): void {}

  getPhotoUrl(): PhotoUrl {
    return this.post.photo ?? 'assets/png/no-photo.png';
  }

}
