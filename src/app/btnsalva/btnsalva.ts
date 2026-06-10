import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnmodifica',
  standalone: true,
  templateUrl: './btnsalva.html',
  styleUrls: ['./btnsalva.css']
})
export class BTNSalva {

  constructor(private router: Router) {}

  vaiAllaSalva() {
  this.router.navigate(['/pagina-salva']);
}

}
