import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  addToCart(product: any): void {
    const existingItem = this.cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  isInCart(product: any): boolean {
    return this.cart.some(item => item.name === product.name);
  }

  getProductQuantity(product: any): number {
    const item = this.cart.find(item => item.name === product.name);
    return item ? item.quantity : 0;
  }

  increaseQuantity(product: any): void {
    const item = this.cart.find(item => item.name === product.name);
    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(product: any): void {
    const item = this.cart.find(item => item.name === product.name);
    if (item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromCart(product);
      }
    }
  }

  removeFromCart(product: any): void {
    this.cart = this.cart.filter(item => item.name !== product.name);
  }

  getCart(): any[] {
    return this.cart;
  }
}