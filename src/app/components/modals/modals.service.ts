import { Injectable } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import { Observable } from "rxjs";
import { Post } from "../posts/models";
import { AddPostComponent } from "./add-post/add-post.component";

@Injectable()
export class ModalsService {

  constructor(private dialog: MatDialog) {}

  openPostModal(data: any): Observable<Post> {
    return this.dialog.open(AddPostComponent, { data }).afterClosed()
  }
}
