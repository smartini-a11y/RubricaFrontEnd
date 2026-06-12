import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnmodifica',
  standalone: true,
  templateUrl: './btn-modifica.html',
  styleUrls: ['./btn-modifica.css']
})
export class BTNmodifica {

  constructor(private router: Router) {}

 vaiAllaModifica() {
  this.router.navigate(['/pagina-modifica-contatto']);
}

}
