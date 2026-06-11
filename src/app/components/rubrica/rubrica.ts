import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{RouterLink} from '@angular/router';
import { Router } from '@angular/router';

import { BTNaggiungiFam } from "../../btnaggiungi-fam/btnaggiungi-fam";
import { BTNmodifica } from "../../btnmodifica/btnmodifica";
import { BtnContattoComponent } from "../../btn-contatto/btn-contatto";

import { ContattiAggingiService } from '../../servizi/contatti-aggingi';
import { ChangeDetectorRef } from '@angular/core';

interface Contatto {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  Numtelefono: string;
}

@Component({
  selector: 'app-rubrica',
  standalone: true,
  templateUrl: './rubrica.html',
  styleUrl: './rubrica.css',
  imports: [CommonModule, FormsModule, RouterLink, BTNaggiungiFam, BTNmodifica, BtnContattoComponent]
})
//gestisco la lista che creo in una classe e faccio i metodi per aggiungere, modificare e cancellare i contatti
export class RubricaComponent {
  
  listaContatti: Contatto[] = [];

  constructor(private service: ContattiAggingiService,  private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log('INIT');
    this.service.getContatti().subscribe({
      next: (data) => {
        this.listaContatti = data; 
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Errore API:', err);
      }
    });
  }

constructor(private router: Router){}
ngOnInit(): void {
    const state = window.history.state;

    if (state && state.contatto) {
      const updatedContact = state.contatto;

      // Find by checking both possible phone key names just in case
      const index = this.listaContatti.findIndex(
        c => c.telefono === updatedContact.telefono || c.telefono === updatedContact.numTelefono
      );

      if (index !== -1) {
        // Overwrite the existing contact cleanly
        this.listaContatti[index] = {
          ...this.listaContatti[index], // Keeps original ID intact safely
          nome: updatedContact.nome,
          cognome: updatedContact.cognome,
          telefono: updatedContact.telefono, // Stored safely as 'telefono'
          email: updatedContact.email
        };
      }
    }
  }
  nuovoNome: string = '';
  nuovoCognome: string = '';
  nuovoTelefono: string = '';
  nuovaEmail: string = '';
  ultimoId= 100;

  aggiungiContatto() 
  {
    if (this.nuovoNome && this.nuovoCognome && this.nuovoTelefono && this.nuovaEmail) {
      this.listaContatti.push
      ({
        id: this.ultimoId++,
        nome: this.nuovoNome,
        cognome: this.nuovoCognome,
        email: this.nuovaEmail,
        Numtelefono: this.nuovoTelefono
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

  modicaContatto(index: number, contatto: Contatto) {
    this.listaContatti[index] = contatto;
  }
}
