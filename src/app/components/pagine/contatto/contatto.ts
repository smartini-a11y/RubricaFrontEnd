import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  imports: [CommonModule, FormsModule, BTNmodifica, RouterLink],
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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (!id) {
    console.error("ID non valido");
    return;
  }

  // Prima carico tutti i contatti
  this.service.getContatti().subscribe({
    next: (lista) => {
      this.contatti = lista;

      // Solo dopo carico il contatto corrente (this.contatti è già pronto)
      this.service.getContatto(id).subscribe({
        next: (c) => {
          this.c = {
            id: c.id,
            nome: c.nome,
            cognome: c.cognome,
            email: c.email,
            numTelefono: c.numTelefono
          };
          this.caricaFamiliari(); // this.contatti è già popolato ✅
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Errore API:", err);
          alert("Contatto non trovato");
        }
      });
    },
    error: (err) => {
      console.error("Errore durante il caricamento dei contatti:", err);
    }
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
