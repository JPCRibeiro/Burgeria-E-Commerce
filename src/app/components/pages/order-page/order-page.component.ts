import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order/order.service';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule, OrderItemsListComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  order: Order = new Order();

  constructor(private orderService: OrderService) {
    this.order = this.orderService.getCurrentOrder(); 
  }
}
