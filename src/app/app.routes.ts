import { Routes } from '@angular/router';

import { PaginaAggiungiComponent } from './components/pagine/pagina-aggiungi/pagina-aggiungi';
import { PaginaModicaComponent } from './components/pagine/pagina-modica-contatto/pagina-modica-contatto';
import { RubricaComponent } from './components/pagine/rubrica/rubrica';
import { ContattoComponent } from './components/pagine/contatto/contatto';
import { Login } from './components/pagine/login/login';
import { BtnContattoComponent } from './components/bottoni/btn-contatto/btn-contatto';


export const routes: Routes = [
  { path: '', component: RubricaComponent },
  { path: 'contatto/:id', component: ContattoComponent },
  // pagina aggiungi
  { path: 'pagina-aggiungi', component: PaginaAggiungiComponent },

  // pagina modifica
 { path: 'pagina-modica-contatto/:id', component: PaginaModicaComponent },

  { path: 'login', component: Login },
  { path: 'btn-contatto', component: BtnContattoComponent }

];
