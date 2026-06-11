import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BTNaggiungiFam } from "./btnaggiungi-fam/btnaggiungi-fam";
import { RubricaComponent } from "./components/rubrica/rubrica";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BTNaggiungiFam, RubricaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parteFrontend');
}
