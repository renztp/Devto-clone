import { Component, Inject, Input, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { MenuItem } from "primeng/api";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-dynamic-menu-bar",
  templateUrl: "./dynamic-menu-bar.component.html",
  styleUrls: ["./dynamic-menu-bar.component.scss"]
})
export class DynamicMenuBarComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) {
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
