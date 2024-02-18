import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface LoginRequest {
  domain: string;
  audience: string;
  scope: string;
  clientId: string;
  responseType: string;
  redirectUri: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getPokemon(pokemon: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  }

  public login(loginReq: LoginRequest): Observable<any> {
    console.log(loginReq)
    return this.http.get(`https://${loginReq.domain}/authorize?audience=${loginReq.audience}&scope=${loginReq.scope}&response_type=${loginReq.responseType}&client_id=${loginReq.clientId}&redirect_uri=${loginReq.redirectUri}`, {
      observe: 'response',
      responseType: 'text'
    });
  }
}
