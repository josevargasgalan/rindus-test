import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './posts.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModalsService } from '../modals';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { PostCommentsComponent } from './components/post/components/post-comments/post-comments.component';
import { PostsService,CommentsService } from './services';
import { AddPostComponentModule } from '../modals/add-post/add-post.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostCommentsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    AddPostComponentModule
  ],
  providers: [PostsService, ModalsService, CommentsService],
  exports: [PostsComponent]
})
export class PostsComponentModule { }
