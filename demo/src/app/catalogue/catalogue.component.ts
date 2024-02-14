import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  products: any[]=[];
  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.http.get<any>('assets/products_list.json').subscribe(data => {
      this.products = data.products;
      console.log("products",this.products);
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  isInCart(product: any): boolean {
    return this.cartService.isInCart(product);
  }

  getProductQuantity(product: any): number {
    return this.cartService.getProductQuantity(product);
  }

  increaseQuantity(product: any): void {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: any): void {
    this.cartService.decreaseQuantity(product);
  }
}