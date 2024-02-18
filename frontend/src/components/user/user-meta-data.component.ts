import { Component, OnInit } from '@angular/core';
import { concatMap, tap, map } from 'rxjs/operators';

// Import the HttpClient for making API requests
import { HttpClient } from '@angular/common/http';

// Import AuthService from the Auth0 Angular SDK to get access to the user
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-metadata',
  template: `<div *ngIf="metadata">
    <pre>{{ metadata }}</pre>
  </div>`,
  styles: [],
})
export class UserMetadataComponent implements OnInit {
  metadata = {};

  // Inject both AuthService and HttpClient
  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.auth.user$
    .pipe(
      concatMap((user) =>
        // Use HttpClient to make the call
        this.http.get(
          encodeURI(`https://dev-40vwmq120o5q42sc.us.auth0.com/api/v2/users/${user?.sub}`)
        )
      ),
      map((user: any) => user.user_metadata),
        tap((meta) => {
          console.log(meta);
          this.metadata = meta
        })
    )
    .subscribe();
  }
}
