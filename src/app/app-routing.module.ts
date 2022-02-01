import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
