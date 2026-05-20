import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // Store Information
  storeName: string = 'Online Store';
  currentYear: number = new Date().getFullYear();

  // Contact Details
  email: string = 'support@onlinestore.com';
  phone: string = '+91 98765 43210';
  address: string = 'Pune, Maharashtra, India';

  // Social Media Links
  facebookUrl: string = '#';
  instagramUrl: string = '#';
  twitterUrl: string = '#';
  youtubeUrl: string = '#';

  // Newsletter
  subscriberEmail: string = '';

  // Quick Links
  quickLinks: string[] = [
    'Home',
    'Products',
    'Categories',
    'Offers',
    'Contact Us'
  ];

  // Customer Service Links
  customerServiceLinks: string[] = [
    'My Account',
    'Order Tracking',
    'Wishlist',
    'Return Policy',
    'FAQs'
  ];

  // Subscribe Method
  subscribe(): void {
    if (this.subscriberEmail.trim()) {
      alert(
        `Thank you for subscribing to ${this.storeName} with ${this.subscriberEmail}!`
      );
      this.subscriberEmail = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }

  // Helper Methods
  getCopyrightText(): string {
    return `© ${this.currentYear} ${this.storeName}. All Rights Reserved.`;
  }

  getContactInfo(): string {
    return `${this.email} | ${this.phone}`;
  }
}{

}
