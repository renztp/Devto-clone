import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environment/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthButtonComponent } from '../components/auth/auth-button.component';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { UserMetadataComponent } from '../components/user/user-meta-data.component';
import { ComponentsModule } from '../components/components.module';
import { DynamicMenuBarComponent } from '../components/dynamic-menu-bar/dynamic-menu-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    UserMetadataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: environment.domain,
      clientId: environment.clientId,

      authorizationParams: {
        redirect_uri: window.location.origin,

        // Request this audience at user authentication time
        audience: environment.auth0Audience,

        // Request this scope at user authentication time
        scope: 'read:current_user',
      },

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          {
            uri: environment.auth0AudienceApi,
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: environment.auth0Audience,

                // The attached token should have these scopes
                scope: 'read:current_user'
              }
            }
          }
        ]
      }
    })
  ],
  providers: [AuthService, {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
