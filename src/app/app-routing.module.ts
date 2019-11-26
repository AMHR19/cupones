import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuponesComponent } from '../app/cupones/cupones.component';
import { InicioComponent } from '../app/inicio/inicio.component';
import { CuponVencidoComponent } from './cupon-vencido/cupon-vencido.component';
import { CuponCanjeadoComponent } from './cupon-canjeado/cupon-canjeado.component';
import { SalidaComponent } from './salida/salida.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component:InicioComponent},
  {path:'cupones/:idCupon', component:CuponesComponent},
  {path: 'cuponVencido', component:CuponVencidoComponent},
  {path: 'cuponCanjeado', component:CuponCanjeadoComponent},
  {path: 'salida', component:SalidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
