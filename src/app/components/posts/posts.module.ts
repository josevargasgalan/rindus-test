import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PostsComponent, PostComponent
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  providers: [PostsService],
  exports: [PostsComponent]
})
export class PostsComponentModule { }
