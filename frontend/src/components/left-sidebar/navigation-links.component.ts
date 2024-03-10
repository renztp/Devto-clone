import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrl: './navigation-links.component.scss'
})
export class NavigationLinksComponent implements OnInit {
  navLinks: any[] = [
      { name: 'Home', url: '/', icon: 'faSolidHouseChimney' },
      { name: 'Podcasts', url: '/podcasts', icon: 'faSolidMicrophoneLines' },
      { name: 'Videos', url: '/Videos', icon: 'faSolidVideo' },
      { name: 'Tags', url: '/tags', icon: 'faSolidLightbulb' },
      { name: 'DEV Help', url: '/dev-help', icon: 'faSolidTag' },
      { name: 'DEV Showcase', url: '/dev-showcase', icon: 'faSolidWandMagicSparkles' }
  ];

  constructor() {}
  ngOnInit() {}
}
