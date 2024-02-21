import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-dynamic-menu-bar",
  templateUrl: "./dynamic-menu-bar.component.html",
  styleUrls: ["./dynamic-menu-bar.component.scss"]
})
export class DynamicMenuBarComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  constructor() {
    this.items = [
      {
        label: "File",
      },
      {
        label: "Edit",
      },
      {
        label: "Help",
      }
    ]
  }

  ngOnInit(): void {
    console.log("Hello World!")
  }
}
