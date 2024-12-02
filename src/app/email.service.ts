import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(details: any) {
    return this.http.post('http://password-generator-backend-phi.vercel.app/send-email', details);
  }
}
