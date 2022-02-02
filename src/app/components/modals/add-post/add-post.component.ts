import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../../posts/models';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddPostComponent>, @Inject(MAT_DIALOG_DATA) public data:{ title: string, post?: Post }) { }
  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  bodyFormControl = new FormControl('', [Validators.required, Validators.minLength(25)]);

  ngOnInit(): void {
    if(this.data.post) {
      this.titleFormControl.patchValue(this.data.post.title)
      this.bodyFormControl.patchValue(this.data.post.body)
    }
  }

  onAddPost() {
    if(this.titleFormControl.valid && this.bodyFormControl.valid) {
      this.dialogRef.close({
        id: this.data.post?.id,
        userId: this.data.post?.userId,
        title: this.titleFormControl.value,
        body: this.bodyFormControl.value
      })
    }
  }
}
