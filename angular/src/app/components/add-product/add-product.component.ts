import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router, RouterModule } from '@angular/router';

interface Product {
  name: string;
  description: string;
  price: number | null;
  category: string;
  discount: number | null;
  discountPercentage: number | null;
}
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Add FormsModule here
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {

  // product = { name: '', description: '', price: null, category: '', image: '',discount:null, discountPercentage:null };
  product: Product = {
    name: '',
    description: '',
    price: null,
    category: '',
    discount: null,
    discountPercentage: null,
  };
  selectedImage: File | null = null;
  constructor(private productService: ProductService, private router: Router) {}
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  addProduct() {
    console.log("Add Product List");
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product added successfully!');
      this.router.navigate(['/']);
    });
  }
  onSubmit() {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('name', this.product.name);
      formData.append('description', this.product.description);
      formData.append('price', this.product.price?.toString() || ''); // Ensure price is converted to a string
      formData.append('category', this.product.category);
      formData.append('discount', this.product.discount?.toString() || '');
      formData.append('discountPercentage', this.product.discountPercentage?.toString() || '');
      formData.append('image', this.selectedImage);

      this.productService.addProduct(formData).subscribe(
        () => {
          alert('Product added successfully!');
          this.router.navigate(['/']);
        },
        (error) => console.error('Error adding product:', error)
      );
    } else {
      alert('Please select an image!');
    }
  
  }
}
