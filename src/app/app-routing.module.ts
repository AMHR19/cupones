import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuponesComponent } from '../app/cupones/cupones.component';
import { InicioComponent } from '../app/inicio/inicio.component';
import { CuponVencidoComponent } from './cupon-vencido/cupon-vencido.component';
import { CuponCanjeadoComponent } from './cupon-canjeado/cupon-canjeado.component';
import { SalidaComponent } from './salida/salida.component';
import { DesignCuponComponent } from './design-cupon/design-cupon.component';
import { BancoCuponesComponent } from './banco-cupones/banco-cupones.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'designCupones', component: DesignCuponComponent},
  {path: 'bancoCupones', component: BancoCuponesComponent},
  {path:'cupones/:idCupon', component:CuponesComponent}, //cupon disponible
  {path: 'cuponVencido', component:CuponVencidoComponent}, //cuponVencido
  {path: 'cuponCanjeado', component:CuponCanjeadoComponent}, //cuponCanjeado
  {path: 'salida', component:SalidaComponent}, //salir navegador
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
