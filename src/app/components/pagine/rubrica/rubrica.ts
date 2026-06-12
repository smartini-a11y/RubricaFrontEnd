import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { BTNaggiungiFam } from "../../bottoni/btnaggiungi-fam/btnaggiungi-fam";
import { BtnContattoComponent } from "../../bottoni/btn-contatto/btn-contatto";

import { ServizioApi } from '../../../servizi/api';
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
  imports: [CommonModule, FormsModule, RouterLink, BTNaggiungiFam, BtnContattoComponent]
})
//gestisco la lista che creo in una classe e faccio i metodi per aggiungere, modificare e cancellare i contatti
export class RubricaComponent {

  listaContatti: Contatto[] = [];

  constructor(private service: ServizioApi, private cdr: ChangeDetectorRef) { }
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

  nuovoNome: string = '';
  nuovoCognome: string = '';
  nuovoTelefono: string = '';
  nuovaEmail: string = '';
  ultimoId = 100;

  aggiungiContatto() {
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
