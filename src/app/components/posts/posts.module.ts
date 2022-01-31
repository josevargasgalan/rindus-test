import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent, PostComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [PostsComponent]
})
export class PostsComponentModule { }
