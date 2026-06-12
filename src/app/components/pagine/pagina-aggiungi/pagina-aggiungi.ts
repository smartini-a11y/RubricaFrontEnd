import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContattiAggingiService } from '../../../servizi/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paginaaggiungi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-aggiungi.html',
  styleUrls: ['./pagina-aggiungi.css']
})
export class PaginaAggiungiComponent {

  nome: string = '';
  cognome: string = '';
  email: string = '';
  numTelefono: string = '';

  constructor(private service: ContattiAggingiService, protected location: Location) {}

  aggiungiContatto() {

  const body = {
  nome: this.nome,
  cognome: this.cognome,
  email: this.email,
  numTelefono: this.numTelefono   // <-- DEVE CHIAMARSI COSÌ
  };


    this.service.aggiungiContatto(body).subscribe({
      next: (res) => {
        console.log("Risposta API:", res);
        alert("Contatto aggiunto con successo");

        this.nome = '';
        this.cognome = '';
        this.email = '';
        this.numTelefono = '';
      },

      error: (err) => {
        console.error("Errore API:", err);
        alert("Errore API: " + err.message);
      }
    });
  }
}
