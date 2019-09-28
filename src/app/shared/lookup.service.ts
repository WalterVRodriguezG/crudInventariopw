import { Injectable } from '@angular/core';
import { Lookup } from '../product/models/lookup';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private units: Array<Lookup> =[
    {name:'Unidad', code:"1", category:1},
    {name:'Caja', code:"2", category:1},
    {name:'Gramos', code:"3", category:1},
    {name:'Litros', code:"4", category:1},
    {name:'miliLitros', code:"5", category:1},
    {name:'Libras', code:"6", category:1}
  ];


  private productCategories:Array<Lookup> = [
    {name:'Limpieza', code:"1", category:1},
    {name:'Higiene Personal', code:"2", category:1},
    {name:'Comida Rapida', code:"3", category:1},
    {name:'Bebidas', code:"4", category:1},
    {name:'Tecnología', code:"5", category:1}
  ];


  constructor() { }

  getProductCategories(): Observable<Lookup[]>{
    return of(this.productCategories);
  }

  getUnits():Observable<Lookup[]>{
    return of(this.units);
  }
}
