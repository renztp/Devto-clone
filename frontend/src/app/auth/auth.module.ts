import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthRoutes } from "./auth.routes";
import { AuthComponent } from "./auth.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardModule } from 'primeng/card'
import { ButtonModule } from "primeng/button";
import { AuthRegisterComponent } from "./auth-register/auth-register.component";

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, AuthRegisterComponent],
  imports: [
    RouterModule.forChild(AuthRoutes),
    CheckboxModule,
    FormsModule,
    CardModule,
    CheckboxModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [AuthComponent]
})
export class AuthModule {}
