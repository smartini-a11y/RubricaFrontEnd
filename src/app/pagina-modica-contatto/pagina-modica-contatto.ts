import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-modica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-modica-contatto.html',
  styleUrls: ['./pagina-modica-contatto.css']
})
export class PaginaModicaComponent implements OnInit {

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


  
  constructor(private router: Router) {}

ngOnInit(): void {
    const state = window.history.state;

    if (state && state.contatto) {
      // Must map straight to the template ngModel properties!
      this.nome = state.contatto.nome;
      this.cognome = state.contatto.cognome;
      this.numTelefono = state.contatto.telefono; // 'telefono' matches list object format
      this.email = state.contatto.email;
    }
  }
 cercaContatto() {
    this.nome = this.cercaNome;
    this.cognome = this.cercaCognome;
    this.numTelefono = this.cercaNumTelefono;
    this.email = this.cercaEmail;
    this.mostraSecondaForm = true;
  }

  salvaModifiche() {
    const contattoAggiornato = {
      nome: this.nome,
      cognome: this.cognome,
      telefono: this.numTelefono,
      email: this.email
    };

    this.router.navigate(['/'], {
      state: { contatto: contattoAggiornato }
    });
  }
}