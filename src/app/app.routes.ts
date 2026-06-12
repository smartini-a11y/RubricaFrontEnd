import { Routes } from '@angular/router';

import { PaginaAggiungiComponent } from './pagine/pagina-aggiungi/pagina-aggiungi';
import { PaginaModificaContatto } from './pagine/pagina-modifica-contatto/pagina-modifica-contatto'
import { RubricaComponent } from './pagine/rubrica/rubrica';
import { ContattoComponent } from './components/contatto/contatto'


export const routes: Routes = [
  { path: '', component: RubricaComponent },  // pagina iniziale
  { path: '', component: ContattoComponent },
  // pagina aggiungi
  { path: 'pagina-aggiungi', component: PaginaAggiungiComponent },

  // pagina modifica
  { path: 'pagina-modica-contatto', component: PaginaModificaContatto },

  // pagina salva
];
