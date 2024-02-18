import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthButtonComponent } from '../components/auth/auth-button.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
