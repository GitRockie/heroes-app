import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListadoComponent
      },
      {
        path: 'add',
        component: AgregarComponent
      },
      {
        path: 'edit/:id',
        component: AgregarComponent
      },
      {
        path: 'search',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  },
  
];


@NgModule({
 
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]

})
export class HeroesRoutingModule { }
