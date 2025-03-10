import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiURL = 'https://fakestoreapi.com/products?limit=20';

  getProducts() {
    return this.http.get<Product[]>(this.apiURL);
  }
}