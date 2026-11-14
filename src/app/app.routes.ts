import { Routes } from '@angular/router';
import { Principal } from './sitios/principal';
import { Contactenos } from './sitios/contactenos';
export const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: Principal, title: 'Principal | Morales Viajes' },
  { path: 'contactenos', component: Contactenos, title: 'Contáctenos | Morales Viajes' },
  { path: '**', redirectTo: 'principal' }
];
