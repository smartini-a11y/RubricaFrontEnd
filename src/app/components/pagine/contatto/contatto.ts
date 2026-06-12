import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BTNmodifica } from "../../bottoni/btnmodifica/btnmodifica";
import { ContattiAggingiService } from '../../../servizi/api';

import { ChangeDetectorRef } from '@angular/core';


interface Contatto {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  numTelefono: string;
}

@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [CommonModule, FormsModule, BTNmodifica],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
})
export class ContattoComponent implements OnInit {

  c: Contatto | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private service: ContattiAggingiService,
        private cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {

    // 1️⃣ Prendo l'ID dall'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      console.error("ID non valido");
      return;
    }

    // 2️⃣ Chiamo l'API
    this.service.getContatto(id).subscribe({

      next: (c) => {

        console.log("RAW API:", c);

        // 3️⃣ PARSING CORRETTO
        this.c = {
          id: c.id,
          nome: c.nome,
          cognome: c.cognome,
          email: c.email,
          numTelefono: c.numTelefono
        };

        // 4️⃣ LOG COMPLETO DOPO PARSING
        console.log("CONTATTO PARSATO:", this.c);

                this.cdr.detectChanges();

      },

      error: (err) => {
        console.error("Errore API:", err);
        alert("Contatto non trovato");
      }
    });
  }
}
