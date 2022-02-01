import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/api/api.service";
import { Post } from "./models";

@Injectable()
export class PostsService {

  constructor(private apiSevice: ApiService) {}

  getPosts(): Observable<Post[]> {
    return this.apiSevice.get('posts');
  }

  deletePost(post: Post): Observable<Post[]> {
    return this.apiSevice.delete(`posts/${post.id}`);
  }
}
