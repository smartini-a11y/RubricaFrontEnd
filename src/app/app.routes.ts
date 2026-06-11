import { Routes } from '@angular/router';

import { PaginaAggiungiComponent } from './pagina-aggiungi/pagina-aggiungi';
import { PaginaModificaComponent } from './pagina-modica-contatto/pagina-modica-contatto';
import { RubricaComponent } from './components/rubrica/rubrica';
import { ContattoComponent } from './components/contatto/contatto'


export const routes: Routes = [
  { path: '', component: RubricaComponent },  // pagina iniziale
  { path: '', component: ContattoComponent},
  // pagina aggiungi
  { path: 'pagina-aggiungi', component: PaginaAggiungiComponent },

  // pagina modifica
  { path: 'pagina-modica-contatto', component: PaginaModificaComponent },

  // pagina salva
];
