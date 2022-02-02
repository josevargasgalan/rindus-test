import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../modals';
import { Post, SpinnerConfig } from './models';
import { PostsService } from './services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  spinnerConfig = SpinnerConfig;

  constructor(private postsService: PostsService, private modalsService: ModalsService) { }

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

  onAddPost() {
    this.modalsService.openPostModal({title: 'Add new Post'}).subscribe((post: Post) => {
      if(post) {
        this.postsService.addPost(post).subscribe(res => {
          this.posts.unshift(post);
        });
      }
    })
  }

  onUpdatePost(post: Post) {
    this.modalsService.openPostModal({title: 'Update Post', post}).subscribe((modalPost: Post) => {
      if(modalPost) {
        this.postsService.updatePost(post).subscribe(res => {
          const postId = this.posts.findIndex(filteredPost => filteredPost.id === post.id)
          this.posts[postId] = modalPost;
        });
      }
    })
  }
}
