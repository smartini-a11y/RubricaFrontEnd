import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContattiAggingiService {

  private apiUrl = 'http://192.168.124.18:5000/api/Contatti';

  constructor(private http: HttpClient) {}

  aggiungiContatto(contatto: any): Observable<string> {
    return this.http.post(this.apiUrl, contatto, { responseType: 'text' });
  }
}
