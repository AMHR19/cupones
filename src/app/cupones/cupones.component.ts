import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import $ from 'jquery';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { cupones } from '../models/cupones';

import { cuponesService } from '../services/cupones.service';

import * as moment from 'moment';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.css']
})
export class CuponesComponent implements OnInit {

  cupon: cupones;
  idcupon: string;

  descuento: number;
  now = moment().format("DD-MM-YY");


  constructor(
    public _cuponesService: cuponesService,
    public _router: Router,
    public _route: ActivatedRoute
  ) {
    this.cupon = new cupones('','', '', '');
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.idcupon = params['idCupon']
    });
    this.getCupon(this.idcupon)

  }

  getCupon(idCupon) {
    this._cuponesService.getCupon(idCupon).subscribe(
      res => {
        this.cupon = res.cupon
        let fecha = this.cupon.vigencia 


        if (fecha < this.now) {              
          this._router.navigate(['/cuponVencido'])
        } else {
          if (this.cupon.status == 'B') {
            console.log(this.cupon.status);
            this._router.navigate(['/cuponCanjeado'])
          } else if (this.cupon.status == 'A') {
            Swal.fire({
              title: '¿Deseas canjear el cupón?',
              text: "El cupón NO podrá reutilizarse",
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sí!',
              cancelButtonText: 'Cancelar',
              backdrop: `rgba(80, 1, 1, 0.78)`,
            }).then((result) => {
              if (result.value) {
                Swal.fire(
                  'Canjeado!',
                  'El cupón ha sido canjeado',
                  'success'
                )
                this.updateCupon(this.idcupon);
              }else{
                this._router.navigate(['/salida'])
              }
            })
          }

        }
      }
    ), err => {
      console.log('error:', err);
    }
  }

  updateCupon(idCupon) {
    this._cuponesService.updateCupon(idCupon).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/cuponCanjeado'])
      }
    )
  }
}
