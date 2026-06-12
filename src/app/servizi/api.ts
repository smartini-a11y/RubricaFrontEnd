import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContattiAggingiService {

  private apiUrl = 'http://192.168.124.18:5000/api/Contatti';
  private apiUrlFM = 'http://192.168.124.18:5000/api/Famigliari';

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

  // POST - Aggiungi familiare da vedere
  aggiungiFamigliare(familiare: any): Observable<string> {
    return this.http.post(this.apiUrlFM, familiare, { responseType: 'text' });
  }

  // PUT - Modifica familiare da vedere
  modificaFamigliare(idContatto: number, idFamigliare: number, familiare: any): Observable<string> {
    return this.http.put(`${this.apiUrlFM}/${idContatto}/${idFamigliare}`, familiare, { responseType: 'text' });
  }

  // DELETE - Rimuovi familiare da vedere
  rimuoviFamigliare(idContatto: number, idFamigliare: number): Observable<string> {
    return this.http.delete(`${this.apiUrlFM}/${idContatto}/${idFamigliare}`, { responseType: 'text' });
  }

  //GET - Ottieni un familiare da vedere
  getFamigliare(idContatto: number, idFamigliare: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlFM}/${idContatto}/${idFamigliare}`);
  }

  /**
   * La funzione restituisce tutti i familiari del contatto con quell'id
   * @param idContatto 
   * @returns Array di object 
   */
  getFamigliari(idContatto: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlFM}/condivisi/${idContatto}`);
  }
}
