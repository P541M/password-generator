import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor(private http: HttpClient) {}

  generatePassword(options: any) {
    return this.http.post('http://password-generator-backend-phi.vercel.app/generate-password', options);
  }
}
