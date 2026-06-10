import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-salva',
  standalone: true,
  templateUrl: './pagina-salva.html',
  styleUrls: ['./pagina-salva.css']
})
export class PaginaSalvaComponent {

  salva() {
    console.log("Contatto salvato!");
    alert("fatto");
  }
}
