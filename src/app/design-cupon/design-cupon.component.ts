import { Component, OnInit } from '@angular/core';

import { cupones } from '../models/cupones';
import { cuponesService } from '../services/cupones.service';

@Component({
  selector: 'app-design-cupon',
  templateUrl: './design-cupon.component.html',
  styleUrls: ['./design-cupon.component.css']
})
export class DesignCuponComponent implements OnInit {

  cupon:cupones;
  idCupon:string;

  constructor(
    public _cuponesService:cuponesService
  ) { 
    this.cupon = new cupones('','', '', '');
  }


  ngOnInit() {
  }

}
