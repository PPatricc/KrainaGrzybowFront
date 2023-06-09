import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + "/itemsList");
  }

  public save(user: Product) {
    return this.http.post<Product>(this.productsUrl, user);
  }
}
