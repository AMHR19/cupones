import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { cupones } from '../models/cupones'
import 'rxjs/add/operator/map';
import { Http,Headers } from '@angular/http';
import { url } from '../global'

@Injectable({
    providedIn: 'root'
})

export class cuponesService{

    public liga:string;
    constructor(
        private _http:Http
    ){
        this.liga = url + '/cupon/';
    }
    
    //6681728193

    public getCupon(idCupon){
        return this._http.get(this.liga + 'get/'+ idCupon ).map(res=>res.json());
    }

    public updateCupon(idCupon){
        let cupon = {
            status:''
        }
        cupon.status = 'B'
        console.log(cupon);
        
        return this._http.put(this.liga + 'update/' + idCupon, cupon).map(res=>res.json());
    }
}
