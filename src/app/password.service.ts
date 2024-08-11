import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor(private http: HttpClient) {}

  generatePassword(options: any) {
    return this.http.post('http://localhost:3000/generate-password', options);
  }
}
