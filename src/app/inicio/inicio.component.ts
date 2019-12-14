import { Component, OnInit } from '@angular/core';

// import { cupones } from '../models/cupones';
// import { cuponesService } from '../services/cupones.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // cupon:cupones;
  // idCupon:string;

  constructor(
    // public _cuponesService:cuponesService
  ) { 
    // this.cupon = new cupones('','', '', '');
  }

  ngOnInit() {
  }

}
