import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CuponesComponent } from './cupones/cupones.component';
import { InicioComponent } from './inicio/inicio.component';
import { CuponVencidoComponent } from './cupon-vencido/cupon-vencido.component';
import { CuponCanjeadoComponent } from './cupon-canjeado/cupon-canjeado.component';


@NgModule({
  declarations: [
    AppComponent,
    CuponesComponent,
    InicioComponent,
    CuponVencidoComponent,
    CuponCanjeadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
