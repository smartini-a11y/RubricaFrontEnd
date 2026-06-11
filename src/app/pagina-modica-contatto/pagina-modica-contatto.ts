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

  // FASE 1: dati di ricerca
  cercaNome: string = '';
  cercaCognome: string = '';
  cercaNumTelefono: string = '';
  cercaEmail: string = '';

  // FASE 2: dati da modificare
  nome: string = '';
  cognome: string = '';
  numTelefono: string = '';
  email: string = '';

  // flag per mostrare la seconda form
  mostraSecondaForm: boolean = false;

  // prende i dati del primo form e li copia nel secondo
  cercaContatto() {
    this.nome = this.cercaNome;
    this.cognome = this.cercaCognome;
    this.numTelefono = this.cercaNumTelefono;
    this.email = this.cercaEmail;

    // per ora l’email la lasci vuota o la compili a mano
    this.mostraSecondaForm = true;
  }

  salvaModifiche() {
    const contattoAggiornato = {
      nome: this.nome,
      cognome: this.cognome,
      numTelefono: this.numTelefono,
      email: this.email
    };

    console.log('Contatto aggiornato:', contattoAggiornato);
  }
}
