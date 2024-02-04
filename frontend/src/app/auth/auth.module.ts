import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthRoutes } from "./auth.routes";
import { AuthComponent } from "./auth.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent],
  imports: [
    RouterModule.forChild(AuthRoutes),
    CheckboxModule,
    FormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule {}