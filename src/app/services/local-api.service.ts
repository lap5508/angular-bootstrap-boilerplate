import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<any[]>(`${this.baseUrl}/contacts`);
  }

}
