import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private url = 'https://formsubmit.co/ajax/6153df0697f0629b32f1904e75630499';

  constructor(private http: HttpClient) {}

  send(data: { email: string; message: string }): Observable<any> {
    return this.http.post(this.url, {
      email: data.email,
      message: data.message,
      _captcha: 'false'
    });
  }
}
