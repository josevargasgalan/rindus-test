import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SpinnerConfig } from 'src/app/models';
import { ModalsService } from '../modals';
import { Post } from './models';
import { PostsService } from './services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  spinnerConfig = SpinnerConfig;
  searchPostFormControl = new FormControl('');

  private unsubscribe: Subject<boolean> = new Subject<boolean>();
  private unsearchedPosts: Post[] = [];

  constructor(private postsService: PostsService, private modalsService: ModalsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.unsearchedPosts = posts;
    })

    this.searchPostFormControl.valueChanges.pipe(takeUntil(this.unsubscribe)).subscribe(search => {
      this.posts = this.unsearchedPosts.filter(post => post.title.includes(search));
    })
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      const filteredPosts = this.posts.filter(filteredPost => filteredPost.id !== post.id);
      this.posts = filteredPosts
      const filteredPostsUnsearched = this.unsearchedPosts.filter(filteredPost => filteredPost.id !== post.id);
      this.unsearchedPosts = filteredPostsUnsearched;
    });
  }

  onAddPost() {
    this.modalsService.openPostModal({title: 'Add new Post'}).pipe(takeUntil(this.unsubscribe)).subscribe((post: Post) => {
      if(post) {
        this.postsService.addPost(post).subscribe(res => {
          this.posts.unshift(post);
          this.unsearchedPosts.unshift(post);
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
          this.unsearchedPosts[postId] = modalPost;
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }
}
