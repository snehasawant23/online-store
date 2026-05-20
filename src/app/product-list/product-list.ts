import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = [
    {
      id: 1,
      name: 'Apple iPhone 16',
      price: 79999,
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/u/i/-original-imahgfmyczqxhtm2.jpeg?q=90'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S25',
      price: 74999,
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505'
    },
    {
      id: 3,
      name: 'Sony Headphones',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      id: 5,
      name: 'Gaming Laptop',
      price: 89999,
      image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8'
    }
  ];

  addToCart(product: any): void {
    alert(`${product.name} added to cart successfully!`);
  }
}