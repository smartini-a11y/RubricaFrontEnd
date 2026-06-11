import { Component } from '@angular/core';
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

  constructor(private service: ContattiAggingiService) {}


cercaContatto() {
  //controllo per non insreire id = 0
    if (!this.idDaCercare) {
    alert("Inserisci un ID valido");
    return;
  }

//viene fatta la chiamata che restitusice il contatto
  this.service.getContatto(this.idDaCercare).subscribe({
    next: (contatto) => {
      console.log(contatto);
      this.nome = contatto.nome;
      this.cognome = contatto.cognome;
      this.numTelefono = contatto.numTelefono;
      this.email = contatto.email;

    },
//in caso di errore viene notificato
    error: (err) => {
      console.error("Errore API:", err);
      alert("Contatto non trovato");
    }
  });

}




  salvaModifiche() {
//una volta modificati i dati basta salvarli
    const contattoAggiornato = {
      id : this.idDaCercare,
      nome: this.nome,
      cognome: this.cognome,
      numTelefono: this.numTelefono,
      email: this.email
    };
    

    //controlla sempre che l'id non sia stato cambiato in 0
    //ATTENZIONE VFAR CAPIRE CHE L'ID CHE VIENE MESSO NEL PRIMO CAMPO DICE ACNHE QUALE CONTATTO MODIFICA
    if (!this.idDaCercare) {
  alert("Inserisci un ID valido");
  return;
}


    this.service.modificaContatto(this.idDaCercare, contattoAggiornato).subscribe({
      next: () => alert("Contatto modificato con successo"),
      error: () => alert("Errore durante la modifica")
    });
  }
}
