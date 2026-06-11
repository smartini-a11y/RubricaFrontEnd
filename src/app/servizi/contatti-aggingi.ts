import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContattiAggingiService {

  private apiUrl = 'http://192.168.124.18:5000/api/Contatti';

  constructor(private http: HttpClient) {}

  // POST - Aggiungi contatto funziona
  aggiungiContatto(contatto: any): Observable<string> {
    return this.http.post(this.apiUrl, contatto, { responseType: 'text' });
  }

  // PUT - Modifica contatto da vedere
  modificaContatto(id: number, contatto: any): Observable<string> {
    return this.http.put(`${this.apiUrl}/${id}`, contatto, { responseType: 'text' });
  }

  // DELETE - Rimuovi contatto  da vedere
  rimuoviContatto(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // GET - Ottieni un contatto  da vedere
  getContatto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // GET - Lista contatti  da vedere 
  getContatti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
