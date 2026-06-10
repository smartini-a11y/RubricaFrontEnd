import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnmodifica',
  standalone: true,
  templateUrl: './btnmodifica.html',
  styleUrls: ['./btnmodifica.css']
})
export class BTNmodifica {

  constructor(private router: Router) {}

 vaiAllaModifica() {
  this.router.navigate(['/pagina-modica-contatto']);
}

}
