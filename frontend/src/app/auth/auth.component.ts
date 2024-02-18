import { Component } from "@angular/core";
import { AuthService } from "../../service/auth/auth.service";

@Component({
  selector: 'app-auth',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }
}
