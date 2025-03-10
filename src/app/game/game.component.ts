import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  imports: [FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  sortOrder: 'asc' | 'desc' = 'desc';

  constructor() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products.set(this.sortProducts(response, this.sortOrder));
      },
      error: (error) => console.error('Error fetching products: ', error)
    })
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.products.set(this.sortProducts(this.products(), this.sortOrder));
  }

  sortProducts(products: Product[], order: 'asc' | 'desc'): Product[] {
    return [...products].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}
