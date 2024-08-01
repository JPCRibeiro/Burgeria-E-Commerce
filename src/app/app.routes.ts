import { Routes } from '@angular/router';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { MenuPageComponent } from './components/pages/menu-page/menu-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Burgeria | Acabe com sua fome! ',
    component: HomePageComponent
  },
  {
    path: 'cardapio',
    title: 'Cardápio | Burgeria',
    component: MenuPageComponent
  },
  {
    path: 'cardapio/:nameId',
    component: FoodPageComponent
  },
  {
    path: 'carrinho',
    title: 'Carrinho | Burgeria',
    component: CartPageComponent
  },
  {
    path: 'checkout',
    title: 'Checkout | Burgeria',
    component: CheckoutPageComponent
  },
  {
    path: 'pedido',
    title: 'Pedido | Burgeria',
    component: OrderPageComponent
  },
  {
    path: '**',
    title: 'Página não encontrada | Burgeria',
    component: NotFoundComponent
  }
];