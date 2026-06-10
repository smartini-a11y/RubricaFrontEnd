import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DescrizioneTabella } from '../descrizione-tabella/descrizione-tabella';
import { RigaTabella } from '../righa-tabella/righa-tabella';
import { BTNaggiungiFam } from "../btnaggiungi-fam/btnaggiungi-fam";
import { BTNmodifica } from "../btnmodifica/btnmodifica";

@Component({
  selector: 'app-rubrica-pagina',
  standalone: true,
  imports: [DescrizioneTabella, RigaTabella, BTNaggiungiFam, BTNmodifica],
  templateUrl: './rubrica-pagina.html',
  styleUrls: ['./rubrica-pagina.css']
})
export class RubricaPagina {

  contatti: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/contatti')
      .subscribe(risultato => {
        this.contatti = risultato;
      });
  }

}
