import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoSearchResultComponent } from './components/video-search-result/video-search-result.component';

const routes: Routes = [
  {
    path: ":search",
    component: VideoSearchResultComponent,
    children: [
      {
        path: ":id",
        component: VideoDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
