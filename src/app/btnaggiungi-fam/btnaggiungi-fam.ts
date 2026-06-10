import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnaggiungi-fam',
  standalone: true,
  templateUrl: './btnaggiungi-fam.html',
  styleUrls: ['./btnaggiungi-fam.css']
})
export class BTNaggiungiFam {

  constructor(private router: Router) {}

  vaiAllaAggiungi() {
  this.router.navigate(['/pagina-aggiungi']);
  alert("fatto")
}

}
