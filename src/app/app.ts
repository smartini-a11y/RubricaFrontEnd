import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BTNaggiungi } from "./bottoni/btn-aggiungi/btn-aggiungi";
import { RubricaComponent } from "./pagine/rubrica/rubrica";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BTNaggiungi, RubricaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parteFrontend');
}
