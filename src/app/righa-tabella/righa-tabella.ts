import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-riga-tabella',
  standalone: true,
  templateUrl: './righa-tabella.html',
  styleUrls: ['./righa-tabella.css']
})
export class RigaTabella {

  @Input() nome!: string;
  @Input() cognome!: string;
  @Input() telefono!: string;
  @Input() email!: string;

}
