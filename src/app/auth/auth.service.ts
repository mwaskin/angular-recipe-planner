import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthReponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthReponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWmNQ-FYli6T0O7f74q-fSb5QgxoQb8as',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
