import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import $ from 'jquery';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.css']
})
export class CuponesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
      }
    })
  }

}
