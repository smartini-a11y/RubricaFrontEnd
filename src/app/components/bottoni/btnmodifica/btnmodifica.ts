import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnmodifica',
  standalone: true,
  templateUrl: './btnmodifica.html',
  styleUrls: ['./btnmodifica.css']
})
export class BTNmodifica {

  @Input() id!: any;

  constructor(private router: Router) {}
/**
 * Porta l'utente alla pagina "modica"
 */
 vaiAllaModifica() {
  this.router.navigate(['./pagina-modica-contatto/',this.id]);
}


}

