import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '../models/product';
import { max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Array<Product> =  [
    {  id:1, name: 'Rasuradora', code: '0001', category: { name: 'Higiene Personal', code: '1', category: 1 }, unit: { name: 'Unidad', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:2, name: 'Escoba Automática', code: '0002', category: { name: 'Limpieza', code: '2', category: 1 }, unit: { name: 'Unidad', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:3, name: 'Toallas Extra grandes', code: '0003', category: { name: 'Higiene Personal', code: '1', category: 1 }, unit: { name: 'Unidad', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:4, name: 'Café', code: '0050', category: { name: 'Comida', code: '3', category: 1 }, unit: { name: 'Gramos', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:5, name: 'Azucar', code: '1000', category: { name: 'Comida', code: '3', category: 1 }, unit: { name: 'Libras', code: '6', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:6, name: 'Desodorante', code: '0200', category: { name: 'Higiene Personal', code: '1', category: 1 }, unit: { name: 'Unidad', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:7, name: 'Monitor', code: '2000', category: { name: 'Tecnología', code: '5', category: 1 }, unit: { name: 'Unidad', code: '5', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:8, name: 'Radio Stereo', code: '2001', category: { name: 'Tecnología', code: '5', category: 1 }, unit: { name: 'Unidad', code: '1', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:9, name: 'Cereal', code: '0501', category: { name: 'Comida', code: '3', category: 1 }, unit: { name: 'Libras', code: '6', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:10, name: 'Nutella', code: '0404', category: { name: 'Comida', code: '3', category: 1 }, unit: { name: 'Libras', code: '6', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:11, name: 'Granos varios', code: '0036', category: { name: 'Comida', code: '3', category: 1 }, unit: { name: 'Libras', code: '6', category: 0 }, purchaseRate: 100, salesRate: 110 }
];

  constructor() { }

  getAllProducts():Observable<IProduct[]>{
    return of(this.products)
  }

  getProductById(id:number):Observable<IProduct>{
    var product = this.products.find(item => item.id === id);
    return of(product);
  }

  addNewProduct(product:IProduct):void{
    this.products.sort(item => item.id)
    product.id = this.products.length + 1
    this.products.push(product);
  }

  deleteProduct(product:IProduct):IProduct[]{
    const index = this.products.findIndex(item => item.id === product.id);
    const deletedItem = this.products.splice(index,1);

    return deletedItem;
  }

  updateProduct(product:IProduct):void{

    const index = this.products.findIndex(item => item.id === product.id);
    this.products[index] = product;
  }

}
