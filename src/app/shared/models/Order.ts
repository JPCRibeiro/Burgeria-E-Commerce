import { CartItem } from "./CartItem";

export class Order{
  id!: string;
  items!: CartItem[];
  totalPrice!: number;
  name!: string;
  address!: string;
  phone!: string;
  paymentMethod!: string;
  createdAt!: string;
  status!: string;
  deliveryTime!: string;
}