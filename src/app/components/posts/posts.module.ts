import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    PostsComponent, PostComponent
  ],
  imports: [CommonModule],
  providers: [PostsService],
  exports: [PostsComponent]
})
export class PostsComponentModule { }
