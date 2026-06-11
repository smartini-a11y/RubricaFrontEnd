import { Routes } from '@angular/router';
import { RubricaComponent } from './components/rubrica/rubrica';
import { ContattoComponent } from './components/contatto/contatto';

export const routes: Routes = [
  { path: '', component: RubricaComponent },
  { path: 'contatto/:id', component: ContattoComponent }
];
