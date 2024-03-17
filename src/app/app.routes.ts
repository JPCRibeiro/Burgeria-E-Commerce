import { Routes } from '@angular/router';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Burgeria',
    component: HomePageComponent
  },
  {
    path: 'cardapio',
    title: 'Burgeria - Cardápio',
    component: MenuPageComponent
  },
  {
    path: 'cardapio/:nameId',
    component: FoodPageComponent
  },
  {
    path: 'carrinho',
    title: 'Burgeria - Carrinho',
    component: CartPageComponent
  }
];