import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { Order } from '../../../shared/models/Order';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { OrderService } from '../../../services/order/order.service';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderItemsListComponent],
  providers: [DatePipe],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, cartService: CartService, private orderService: OrderService, private datePipe: DatePipe) { 
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });
  }

  generateRandomId() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let id = '';
  
    for (let i = 0; i < 5; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    for (let i = 0; i < 4; i++) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  
    for (let i = 0; i < 5; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  
    return id;
  }

  padraoTelefone(event: any) {
    let phoneValue = event.target.value;
  
    phoneValue = phoneValue.replace(/[^0-9]/g, '');

    if (phoneValue.length > 0) {
      let formattedPhone = '(' + phoneValue.substring(0, 2);
      if (phoneValue.length > 2) {
        formattedPhone += ') ' + phoneValue.substring(2, 7);
      }
      if (phoneValue.length > 7) {
        formattedPhone += '-' + phoneValue.substring(7, 11);
      }
      this.checkoutForm.get('phone')?.setValue(formattedPhone);
    }

    if (/[a-zA-Z]/.test(event.target.value)) {
      this.checkoutForm.get('phone')?.setValue(phoneValue.replace(/[a-zA-Z]/g, ''));
    }
  }
  
  createOrder() {
    this.formSubmitted = true; 
    
    if (this.checkoutForm.valid) {
      this.order.id = this.generateRandomId();
      this.order.name = this.checkoutForm.get('name')?.value;
      this.order.address = this.checkoutForm.get('address')?.value;
      this.order.phone = this.checkoutForm.get('phone')?.value;
      this.order.paymentMethod = this.checkoutForm.get('paymentMethod')?.value;
      const currentDate = new Date();
      const deliveryTime = new Date(currentDate.getTime() + 45 * 60000);
      this.order.createdAt = format(currentDate, 'HH:mm dd/MM/yy', { locale: ptBR });
      this.order.deliveryTime = format(deliveryTime, 'HH:mm', { locale: ptBR });
      this.orderService.saveOrder(this.order);
      this.router.navigateByUrl('/pedido');
    }
  }
}
