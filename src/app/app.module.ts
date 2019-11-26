import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CuponesComponent } from './cupones/cupones.component';
import { InicioComponent } from './inicio/inicio.component';
import { CuponVencidoComponent } from './cupon-vencido/cupon-vencido.component';
import { CuponCanjeadoComponent } from './cupon-canjeado/cupon-canjeado.component';
import { SalidaComponent } from './salida/salida.component';


@NgModule({
  declarations: [
    AppComponent,
    CuponesComponent,
    InicioComponent,
    CuponVencidoComponent,
    CuponCanjeadoComponent,
    SalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Http,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
