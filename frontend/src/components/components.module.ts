
import { NgModule } from "@angular/core";
import { NavigationLinksComponent } from "./left-sidebar/navigation-links.component";

import { NgIconsModule } from "@ng-icons/core";
import { faSolidHouseChimney, faSolidMicrophoneLines, faSolidVideo, faSolidLightbulb, faSolidTag, faSolidWandMagicSparkles } from '@ng-icons/font-awesome/solid';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { DynamicMenuBarComponent } from "./dynamic-menu-bar/dynamic-menu-bar.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NavigationLinksComponent, DynamicMenuBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ faSolidHouseChimney, faSolidMicrophoneLines, faSolidVideo, faSolidLightbulb, faSolidTag, faSolidWandMagicSparkles }),
  ],
  providers: [],
  exports: [NavigationLinksComponent, DynamicMenuBarComponent]
})
export class ComponentsModule {}
