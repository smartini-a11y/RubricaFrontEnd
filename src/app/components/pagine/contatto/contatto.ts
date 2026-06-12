import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BTNmodifica } from "../../bottoni/btnmodifica/btnmodifica";

import { Btnelimina } from '../../bottoni/btnelimina/btnelimina';
import { Btnindietro } from '../../bottoni/btnindietro/btnindietro';
import {ContattiAggingiService} from '../../../servizi/api'
import { ContattiAggingiService } from '../../../servizi/api';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
  imports: [CommonModule, RouterModule,Btnindietro, BTNmodifica,Btnelimina,FormsModule, FormsModule, BTNmodifica],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
})
export class ContattoComponent implements OnInit {

  idContattoSelezionato: number | null = null;
  c: Contatto | null = null;
  familiari: any[] = [];
  contatti: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ContattiAggingiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    protected location: Location
  ) {}

  vaiAlContatto(id: number) {
  this.router.navigate(['/contatto', id]);
            this.cdr.detectChanges();

}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    if (!id) {
      console.error("ID non valido");
      return;
    }

    // Reset dello stato
    this.c = null;
    this.familiari = [];
    this.contatti = [];
    this.idContattoSelezionato = null;

    // Carica tutto da capo
    this.service.getContatti().subscribe({
      next: (lista) => {
        this.contatti = lista;
        this.service.getContatto(id).subscribe({
          next: (c) => {
            this.c = {
              id: c.id,
              nome: c.nome,
              cognome: c.cognome,
              email: c.email,
              numTelefono: c.numTelefono
            };
            this.caricaFamiliari();
            this.cdr.detectChanges();
          },
          error: (err) => {
            console.error("Errore API:", err);
            alert("Contatto non trovato");
          }
        });
      },
      error: (err) => console.error("Errore lista contatti:", err)
    });
  });
}


  // 🔄 Carica i familiari SOLO quando this.c è disponibile
caricaFamiliari() {
  if (!this.c) return;

  this.service.getFamigliari(this.c.id).subscribe({
    next: (lista) => {
      this.familiari = lista; // ✅ già pronti con nome e cognome
      this.cdr.detectChanges();
    },
    error: (err) => console.error("Errore caricamento familiari:", err)
  });
}


ricaricaTutto() {
  this.service.getContatti().subscribe({
    next: (lista) => {
      this.contatti = lista;
      this.caricaFamiliari();
      this.cdr.detectChanges();
    },
    error: (err) => console.error("Errore ricarica contatti:", err)
  });
}

eliminaFamigliare(famigliareId: number) {
  if (!this.c) return;

  if (!confirm("Sei sicuro di voler rimuovere questo familiare?")) return;

  this.service.rimuoviFamigliare(this.c.id, famigliareId).subscribe({
    next: () => {
      this.ricaricaTutto();
    },
    error: (err) => {
      console.error("Errore durante l'eliminazione:", err);
      alert("Errore durante l'eliminazione");
    }
  });
}



  // ➕ Aggiungi familiare
aggiungiFamigliare() {
  if (!this.idContattoSelezionato) {
    alert("Seleziona un contatto dal menu a tendina.");
    return;
  }

  // ✅ Controlla se è già un familiare
  const giàPresente = this.familiari.some(f => f.id === this.idContattoSelezionato);
  if (giàPresente) {
    alert("Questo contatto è già un familiare.");
    return;
  }
  
eliminaContatto(): void {
    if (!this.c) return;

    const conferma = confirm("Sei sicuro di voler eliminare "+this.c.nome +" "+this.c.cognome+"?");
    if (!conferma) return;

    this.api.rimuoviContatto(this.c.id).subscribe({
      next: () => {
        this.router.navigate([''], { relativeTo: this.route });
      },
      error: (err) => {
        console.error('Errore durante eliminazione:', err);
        alert('Errore durante l\'eliminazione del contatto.');
      }
    });
  }
  this.service.aggiungiFamigliare(this.c!.id, this.idContattoSelezionato!).subscribe({
    next: () => {
      alert("Contatto aggiunto come familiare");
      this.service.getContatti().subscribe({
        next: (lista) => {
          this.contatti = lista;
          this.caricaFamiliari();
          this.idContattoSelezionato = null;
          this.cdr.detectChanges();
      this.ricaricaTutto(); // ✅ ricarica tutto in sequenza
        }

      });
    },
    error: (err) => {
      // Gestisci il 409 in modo leggibile
      if (err.status === 409) {
        alert("Questo contatto è già un familiare.");
      } else {
        console.error("Errore durante l'aggiunta del familiare:", err);
        alert("Errore durante l'aggiunta");
      }
    }
  });
}
}
