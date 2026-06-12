import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { BTNaggiungiFam } from "../../bottoni/btnaggiungi-fam/btnaggiungi-fam";
import { BTNmodifica } from "../../bottoni/btnmodifica/btnmodifica";

import { ContattiAggingiService } from '../../../servizi/api';
import { ChangeDetectorRef } from '@angular/core';

interface Contatto {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  numTelefono: string;   // <-- CORRETTO
}

@Component({
  selector: 'app-rubrica',
  standalone: true,
  templateUrl: './rubrica.html',
  styleUrl: './rubrica.css',
  imports: [CommonModule, FormsModule, RouterLink, BTNaggiungiFam]
})
//gestisco la lista che creo in una classe e faccio i metodi per aggiungere, modificare e cancellare i contatti
export class RubricaComponent {

  listaContatti: Contatto[] = [];

  constructor(private service: ContattiAggingiService, private cdr: ChangeDetectorRef, private router: Router) {}
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

  eliminaContatto(index: number) {
    this.listaContatti.splice(index, 1);
  }

  modicaContatto(index: number, contatto: Contatto) {
    this.listaContatti[index] = contatto;
  }
  //temporaneo per andare alla pagina di login
  goToLogin() {
    this.router.navigate(['/login'], {
      state: { tuttiIContatti: this.listaContatti }
    });
  }
}
