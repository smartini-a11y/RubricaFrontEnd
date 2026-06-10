import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titolo } from "./titolo/titolo";
import { BTNaggiungiFam } from "./btnaggiungi-fam/btnaggiungi-fam";
import { RubricaPagina } from "./rubrica-pagina/rubrica-pagina";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Titolo, BTNaggiungiFam, RubricaPagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parteFrontend');
}
