import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {

  product: any = { id: 0, name: '', description: '', price: null ,discount:null, discountPercentage:null};

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    console.log("Edit Product List");
    const id = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data.data;
    });
  }
  updateProduct() {
    throw new Error('Method not implemented.');
    }
}
