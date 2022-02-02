import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/components/posts/comments.service';
import { PostComments } from 'src/app/components/posts/models/post-comments.model';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  @Input() postId: number = 0;
  comments: PostComments[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getPostComments(this.postId).subscribe(comments => {
      this.comments = comments;
    })
  }

}
