import { Injectable } from '@angular/core';
import { Order } from '../../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }

  saveOrder(order: Order): void {
    localStorage.setItem('currentOrder', JSON.stringify(order));
  }

  getCurrentOrder(): Order {
    const orderJson = localStorage.getItem('currentOrder');
    return orderJson ? JSON.parse(orderJson) : null;
  }
}
