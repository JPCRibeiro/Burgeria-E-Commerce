import { Component } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../shared/models/CartItem';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { TitleComponent } from '../partials/title/title.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, CommonModule, NotFoundComponent, TitleComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) { 
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  decreaseQuantity(cartItem: CartItem){
    if (cartItem.quantity > 1) {
      const newQuantity = cartItem.quantity - 1;
      this.cartService.changeQuantity(cartItem.food.id, newQuantity);
    }
  }

  increaseQuantity(cartItem: CartItem){
    const newQuantity = cartItem.quantity + 1;
    this.cartService.changeQuantity(cartItem.food.id, newQuantity);
  }
}
