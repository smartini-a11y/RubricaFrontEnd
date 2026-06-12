import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContattiAggingiService } from '../../../servizi/api';
import { ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-modica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-modica-contatto.html',
  styleUrls: ['./pagina-modica-contatto.css']
})
export class PaginaModicaComponent implements OnInit {

  idDaCercare: number =0;

  // Modifiers properties bound to ngModel
  nome: string = '';
  cognome: string = '';
  numTelefono: string = '';
  email: string = '';

  // Injected ContattiAggingiService into the constructor
  constructor(
    private service: ContattiAggingiService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(parms =>{
      this.idDaCercare=Number(parms.get('id') ?? 0 );
    });



    this.service.getContatto(this.idDaCercare).subscribe({
      next: (contatto) => {
        console.log("contatto recuperato", contatto);
        this.nome = contatto.nome;
        this.cognome = contatto.cognome;
        // Make sure property mapping matches your backend interface payload format (telefono vs numTelefono)
        this.numTelefono = contatto.numTelefono || contatto.telefono;
        this.email = contatto.email;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Errore API:", err);
      }
    });
  }

  salvaModifiche() {
    // Note: The ID in the first input field dictates which contact profile is updated
    if (!this.idDaCercare) {
      alert("Inserisci un ID valido");
      return;
    }

    const contattoAggiornato = {
      id: this.idDaCercare,
      nome: this.nome,
      cognome: this.cognome,
      telefono: this.numTelefono,
      email: this.email
    };

    this.service.modificaContatto(this.idDaCercare, contattoAggiornato).subscribe({
      next: () => alert("Contatto modificato con successo"),
      error: () => alert("Errore durante la modifica")
    });
  }
}
