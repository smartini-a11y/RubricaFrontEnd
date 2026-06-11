import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContattiAggingiService } from '../servizi/contatti-aggingi'; // <--- CORRETTO

@Component({
  selector: 'app-paginamodifica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-modica-contatto.html',
  styleUrls: ['./pagina-modica-contatto.css']
})
export class PaginaModificaComponent {

  idDaCercare: number = 59;

  nome: string = '';
  cognome: string = '';
  numTelefono: string = '';
  email: string = '';

  mostraSecondaForm: boolean = true;

  constructor(private service: ContattiAggingiService) {}


    cercaContatto() {

   this.service.getContatto(59).subscribe({
  next: (contatto) => {
    console.log("Contatto ricevuto:", contatto);

    this.nome = contatto.Nome;
    this.cognome = contatto.Cognome;
    this.numTelefono = contatto.NumTelefono;
    this.email = contatto.Email;

 //   this.mostraSecondaForm = true;
  },
  error: (err) => {
    console.error("Errore API:", err);
    alert("Contatto non trovato");
  }
});

  }


  salvaModifiche() {
    if (!this.idDaCercare) return;

    const contattoAggiornato = {
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
