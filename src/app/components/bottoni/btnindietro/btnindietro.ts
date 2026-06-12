import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnindietro',
  imports: [],
  templateUrl: './btnindietro.html',
  styleUrls: ['./btnindietro.css'],
})
export class Btnindietro {

  constructor(private router: Router) {}
/**
 * Porta l'utente alla pagina "modica"
 */
  tornaIndietro() {
    this.router.navigate(['/..'])
    
  }

}