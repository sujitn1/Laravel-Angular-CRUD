import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  getData(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
  getTestMessage(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }
}
