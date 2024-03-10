import { NgModule } from "@angular/core";
import { HomePageComponent } from "./homepage/home.page.component";
import { PodcastsPageComponent } from "./podcasts/podcasts.page.component";
import { ComponentsModule } from "../components/components.module";
import { NavigationLinksComponent } from "../components/left-sidebar/navigation-links.component";


@NgModule({
  declarations: [HomePageComponent, PodcastsPageComponent],
  imports: [ComponentsModule],
  exports: [HomePageComponent, PodcastsPageComponent]
})
export class PagesModule {}
