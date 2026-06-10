import { Routes } from '@angular/router';

import { RubricaPagina } from './rubrica-pagina/rubrica-pagina';
import { PaginaAggiungiComponent } from './pagina-aggiungi/pagina-aggiungi';
import { PaginaModificaComponent } from './pagina-modica-contatto/pagina-modica-contatto';
import { PaginaSalvaComponent } from './pagina-salva/pagina-salva';




export const routes: Routes = [
  { path: '', component: RubricaPagina },  // pagina iniziale
  { path: 'rubrica-pagina', component: RubricaPagina },

  // pagina aggiungi
  { path: 'pagina-aggiungi', component: PaginaAggiungiComponent },

  // pagina modifica
  { path: 'pagina-modica-contatto', component: PaginaModificaComponent },

  // pagina salva
  { path: 'pagina-salva', component: PaginaSalvaComponent }
];
