import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // <-- Import this
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css'
})
export class ContattoComponent implements OnInit {
  // Creating an object to hold the data so contatto.html can see it
  c: any = {};
  listaContatti: any[] = [];

  messaggio = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    // Recuperiamo la lista che arriva dall'altra pagina
    const navigazione = this.router.getCurrentNavigation();
    if (navigazione?.extras.state) {
      this.listaContatti = navigazione.extras.state['tuttiIContatti'];
    }
  }

  ngOnInit(): void 
  {
    // Look at the URL and grab the parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // cerca il contatto con quell'id
    this.c = this.listaContatti.find(c => Number(c.id) === id);
  }
  
  checkContatto(item: any): boolean {
    if (item.nome === this.c.nome && item.cognome === this.c.cognome) {
      return false;
    }
    return true;
  }

    familiariSelezionati: any[] = [];

  condividiContatto()
    {
      const selectedElement=document.getElementById('condivisione') as HTMLSelectElement;
      const selectedId = Number(selectedElement.value);
      
      const familiare = this.listaContatti.find(c => Number(c.id)=== selectedId);

      if (!familiare) 
      {
        return;
      }
      // Evito duplicati
      if (!this.familiariSelezionati.includes(familiare)) 
        {
          this.familiariSelezionati.push(familiare);
        }

      //ciclo per costruire il messaggio
      let lista = '';

      for (let f of this.familiariSelezionati) 
        {
          lista += `${f.nome} ${f.cognome}\n`;    
        }

        this.messaggio = lista ;
        
      }

       rimuoviFamiliare(familiare: any) 
      {
        this.familiariSelezionati = this.familiariSelezionati.filter(f => Number(f.id) !== Number(familiare.id));
      }

      vediDettaglio(familiare: any)
      {
        this.router.navigate(['/contatto', familiare.id]);
      }
}