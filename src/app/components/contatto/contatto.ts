import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
})
export class ContattoComponent implements OnInit {
  c: any = undefined;
  listaContatti: any[] = [];
  familiariSelezionati: any[] = [];
  messaggio: string = '';

  // Variabile d'appoggio per il select per evitare getElementById
  idSelezionato: string = '';

  constructor(private route: ActivatedRoute,private router: Router,) 
  {
    // Recuperiamo la lista che arriva dall'altra pagina
    const navigazione = this.router.getCurrentNavigation();
    if (navigazione?.extras.state && navigazione.extras.state['tuttiIContatti']) 
    {
      this.listaContatti = navigazione.extras.state['tuttiIContatti'];
    }
  }

  ngOnInit(): void 
  {
    // Ascolta l'URL: se l'ID cambia, esegue il codice qui dentro AUTOMATICAMENTE
    this.route.paramMap.subscribe(params => {const id = Number(params.get('id'));
    // Trova il contatto corrispondente all'ID e assegnalo a 'c'
    this.c = this.listaContatti.find(c => Number(c.id) === id);});
  }

  // Controlla se l'item della lista è il contatto corrente (per escluderlo dai familiari selezionabili)
  checkContatto(item: any): boolean {
    if (!this.c) return true;
    return item.id !== this.c.id; // controllo tramite id
  }

  // ID come parametro direttamente dall'HTML
  condividiContatto(selectedId: number): void 
  {
    if (!selectedId) return;

    const familiare = this.listaContatti.find((c) => Number(c.id) === selectedId);

    if (!familiare) return;

    // Evito duplicati sempre confrontanto gli id
    const giaPresente = this.familiariSelezionati.some(
      (f) => Number(f.id) === Number(familiare.id),
    );
    if (!giaPresente) {
      this.familiariSelezionati.push(familiare);
      this.aggiornaMessaggio();
    }
  }

  rimuoviFamiliare(familiare: any): void 
  {
    this.familiariSelezionati = this.familiariSelezionati.filter((f) => Number(f.id) !== Number(familiare.id),);
    this.aggiornaMessaggio();
  }

  // Messo in una funzione separata per non ripetere codice
  aggiornaMessaggio(): void 
  {
    this.messaggio = this.familiariSelezionati.map((f) => `${f.nome} ${f.cognome}`).join('\n');
  }
}
