import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsComponentModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./components/albums/albums.module').then(m => m.AlbumsComponentModule)
  },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
