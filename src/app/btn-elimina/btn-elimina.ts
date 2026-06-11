import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-btn-elimina',
  imports: [],
  templateUrl: './btn-elimina.html',
  styleUrl: './btn-elimina.css',
})
export class BtnElimina {

    constructor(private router: Router) {}

   vaiAllaPagElimina() {
  this.router.navigate(['/pagina-elimina']);
}
}
