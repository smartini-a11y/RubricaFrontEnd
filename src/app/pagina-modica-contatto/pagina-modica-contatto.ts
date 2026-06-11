import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContattiAggingiService } from '../servizi/contatti-aggingi';

@Component({
  selector: 'app-paginamodifica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-modica-contatto.html',
  styleUrls: ['./pagina-modica-contatto.css']
})
export class PaginaModificaComponent {

  idDaCercare: number | null = null;

  nome: string = '';
  cognome: string = '';
  numTelefono: string = '';
  email: string = '';

  constructor(
    private service: ContattiAggingiService,
    private cd: ChangeDetectorRef   // <-- AGGIUNTO
  ) {}

  cercaContatto() {

    if (!this.idDaCercare) {
      alert("Inserisci un ID valido");
      return;
    }

    this.service.getContatto(this.idDaCercare).subscribe({
      next: (contatto) => {
        console.log(contatto);

        this.nome = contatto.nome;
        this.cognome = contatto.cognome;
        this.numTelefono = contatto.numTelefono;
        this.email = contatto.email;

        this.cd.detectChanges();   // <-- FUNZIONA DAVVERO
      },

      error: (err) => {
        console.error("Errore API:", err);
        alert("Contatto non trovato");
      }
    });
  }

  salvaModifiche() {

    if (!this.idDaCercare) {
      alert("Inserisci un ID valido");
      return;
    }

    const contattoAggiornato = {
      id: this.idDaCercare,
      nome: this.nome,
      cognome: this.cognome,
      numTelefono: this.numTelefono,
      email: this.email
    };

    this.service.modificaContatto(this.idDaCercare, contattoAggiornato).subscribe({
      next: () => alert("Contatto modificato con successo"),
      error: () => alert("Errore durante la modifica")
    });
  }
}
