import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: any[] = [];
  error: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log("Product List");
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.data;
      },
      error: (err) => {
        this.error = 'Failed to fetch products';
      },
    });
  }
}
