import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/homepage/home.page.component';
import { PodcastsPageComponent } from '../pages/podcasts/podcasts.page.component';
import { PagesModule } from '../pages/pages.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Homepage'
  },
  {
    path: 'podcasts',
    component: PodcastsPageComponent,
    title: 'Podcasts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
