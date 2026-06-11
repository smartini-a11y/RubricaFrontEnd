import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paginamodifica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-modica-contatto.html',
  styleUrls: ['./pagina-modica-contatto.css']
})
export class PaginaModificaComponent {

  nome: string = '';
  cognome: string = '';
  numTelefono: string = '';
  email: string = '';

  salvaContatto() {
    console.log("Contatto modificato!");
    console.log({
      nome: this.nome,
      cognome: this.cognome,
      numTelefono: this.numTelefono,
      email: this.email
    });
    alert("fatto");

    // Qui potrai aggiungere la PUT API
    // this.http.put('URL', { nome, cognome, numTelefono, email }).subscribe(...)
  }
}
