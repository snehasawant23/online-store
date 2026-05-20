import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Store Information
  storeName: string = 'Online Store';
  cartCount: number = 0;

  // Search
  searchText: string = '';

  // Navigation Links
  navLinks: string[] = [
    'Home',
    'Products',
    'Categories',
    'Offers',
    'Contact'
  ];

  // Methods
  searchProducts(): void {
    if (this.searchText.trim()) {
      alert(`Searching for: ${this.searchText}`);
    } else {
      alert('Please enter a product name to search.');
    }
  }

  openCart(): void {
    alert(`You have ${this.cartCount} item(s) in your cart.`);
  }
}


