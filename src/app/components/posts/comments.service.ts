import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/api/api.service";
import { Post } from "./models";
import { PostComments } from "./models/post-comments.model";

@Injectable()
export class CommentsService {

  constructor(private apiSevice: ApiService) {}

  getPostComments(postId: number): Observable<PostComments[]> {
    return this.apiSevice.get(`posts/${postId}/comments`);
  }

}
