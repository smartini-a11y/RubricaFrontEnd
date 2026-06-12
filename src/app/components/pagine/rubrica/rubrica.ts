import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{RouterLink} from '@angular/router';

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

  //ciclo tutti i contatti
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

}
