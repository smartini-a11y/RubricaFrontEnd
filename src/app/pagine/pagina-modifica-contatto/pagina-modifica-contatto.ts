import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContattiAggingiService } from '../../servizi/communicazioneAPI';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pagina-modica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-modifica-contatto.html',
  styleUrls: ['./pagina-modifica-contatto.css']
})
export class PaginaModificaContatto implements OnInit {

  idDaCercare: number | null = null;

  // Modifiers properties bound to ngModel
  nome: string = '';
  cognome: string = '';
  numTelefono: string = '';
  email: string = '';

  // Added missing properties referenced in cercaContatto()
  cercaNome: string = '';
  cercaCognome: string = '';
  cercaNumTelefono: string = '';
  cercaEmail: string = '';
  mostraSecondaForm: boolean = false;

  // Injected ContattiAggingiService into the constructor
  constructor(
    private router: Router,
    private service: ContattiAggingiService,
    private cd: ChangeDetectorRef   // <-- AGGIUNTO

  ) { }

  ngOnInit(): void {
    const state = window.history.state;

    if (state && state.contatto) {
      this.nome = state.contatto.nome;
      this.cognome = state.contatto.cognome;
      this.numTelefono = state.contatto.telefono;
      this.email = state.contatto.email;
    }
  }

  cercaContatto() {
    if (!this.idDaCercare) {
      alert("Inserisci un ID valido per cercare");
      return;
    }

    // Moved the API call inside the proper method block
    this.service.getContatto(this.idDaCercare).subscribe({
      next: (contatto) => {
        console.log(contatto);
        this.nome = contatto.nome;
        this.cognome = contatto.cognome;
        // Make sure property mapping matches your backend interface payload format (telefono vs numTelefono)
        this.numTelefono = contatto.numTelefono || contatto.telefono;
        this.email = contatto.email;
        this.mostraSecondaForm = true;


        this.cd.detectChanges();   // <-- FUNZIONA DAVVERO

      },
      error: (err) => {
        console.error("Errore API:", err);
        alert("Contatto non trovato");
      }
    });
  }

  salvaModifiche() {
    // Note: The ID in the first input field dictates which contact profile is updated
    if (!this.idDaCercare) {
      alert("Inserisci un ID valido");
      return;
    }

    const contattoAggiornato = {
      id: this.idDaCercare,
      nome: this.nome,
      cognome: this.cognome,
      telefono: this.numTelefono,
      email: this.email
    };

    this.service.modificaContatto(this.idDaCercare, contattoAggiornato).subscribe({
      next: () => alert("Contatto modificato con successo"),
      error: () => alert("Errore durante la modifica")
    });
  }
}
