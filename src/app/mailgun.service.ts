import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailgunService {

  public url: string;

  constructor(private http: HttpClient) {
  }



  // tslint:disable: align
  sendEmail(to: string,
    from: string,
    subject: string,
    message: string): Observable<any> {
    const url = '/hello';
    const body = {
      to,
      from,
      subject,
      message
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(url, JSON.stringify(body), {
      headers
    });
  }
}
