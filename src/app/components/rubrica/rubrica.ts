import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{RouterLink} from '@angular/router';

interface Contatto {
  nome: string;
  cognome: string;
  telefono: string;
  email: string;
}

@Component({
  selector: 'app-rubrica',
  standalone: true,
  templateUrl: './rubrica.html',
  styleUrl: './rubrica.css',
  imports: [CommonModule, FormsModule,RouterLink]
})
//gestisco la lista che creo in una classe e faccio i metodi per aggiungere, modificare e cancellare i contatti
 export class RubricaComponent {
  listaContatti: Contatto[] = [
    { nome: 'Mario', cognome: 'Rossi', telefono: '333123456', email: 'mario.rossi@email.com' },
    { nome: 'Luigi', cognome: 'Verdi', telefono: '333987654', email: 'luigi.verdi@email.com' },
    { nome: 'Giulia', cognome: 'Bonani', telefono: '333134567', email: 'giulia.bonani@email.com' },
    { nome: 'Francesca', cognome: 'Bianchi', telefono: '333765432', email: 'francesca.bianchi@email.com' }
  ];

  nuovoNome: string = '';
  nuovoCognome: string = '';
  nuovoTelefono: string = '';
  nuovaEmail: string = '';

  aggiungiContatto() {
    if (this.nuovoNome && this.nuovoCognome && this.nuovoTelefono && this.nuovaEmail) {
      this.listaContatti.push({
        nome: this.nuovoNome,
        cognome: this.nuovoCognome,
        telefono: this.nuovoTelefono,
        email: this.nuovaEmail
      });
      this.nuovoNome = '';
      this.nuovoCognome = '';
      this.nuovoTelefono = '';
      this.nuovaEmail = '';
    }
  }

  eliminaContatto(index: number) {
    this.listaContatti.splice(index, 1);
  }

  modificaContatto(index: number, contatto: Contatto) {
    this.listaContatti[index] = contatto;
  } 
}
