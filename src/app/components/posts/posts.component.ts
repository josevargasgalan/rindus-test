import { Component, OnInit } from '@angular/core';
import { Post } from './models';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post).subscribe(res => {
      this.posts = this.posts.filter(filteredPost => filteredPost.id !== post.id);
    });
  }

}
