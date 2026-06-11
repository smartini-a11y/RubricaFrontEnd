import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  numTelefono: string = '';
  email: string = '';

salvaContatto() {
  console.log("Contatto salvato!");
  console.log({
    nome: this.nome,
    cognome: this.cognome,
    numTelefono: this.numTelefono,
    email: this.email
  });
  alert("fatto");
}


    // Qui potrai aggiungere la POST API
    // this.http.post('URL', { nome, cognome, telefono, email }).subscribe(...)
  }

