import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnaggiungi',
  standalone: true,
  templateUrl: './btn-aggiungi.html',
  styleUrls: ['./btn-aggiungi.css']
})
export class BTNaggiungi {

  constructor(private router: Router) {}

  vaiAllaAggiungi() {
  this.router.navigate(['/pagina-aggiungi']);
}

}
