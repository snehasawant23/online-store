import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    ProductList,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Application title
  title: string = 'online-store';

  // Store information
  storeName: string = 'Online Store';
  storeTagline: string = 'Best Products at Best Prices';

  // Hero section content
  heroTitle: string = 'Welcome to Online Store';
  heroSubtitle: string =
    'Discover amazing products, unbeatable deals, and a smooth shopping experience.';

  // Feature highlights
  features: string[] = [
    'Fast Delivery',
    'Best Quality Products',
    'Secure Payments',
    'Easy Returns',
    '24/7 Customer Support'
  ];

  // Newsletter data
  newsletterTitle: string = 'Subscribe to Our Newsletter';
  newsletterDescription: string =
    'Get updates about new products, offers, and discounts.';

  // Footer content
  copyrightYear: number = 2026;

  // Example methods
  onShopNow(): void {
    console.log('Shop Now button clicked');
  }

  onViewProducts(): void {
    console.log('View Products button clicked');
  }

  onSubscribe(email: string): void {
    if (email && email.trim() !== '') {
      alert(`Thank you for subscribing with ${email}!`);
    } else {
      alert('Please enter a valid email address.');
    }
  }

  // Utility methods
  getStoreInfo(): string {
    return `${this.storeName} - ${this.storeTagline}`;
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}