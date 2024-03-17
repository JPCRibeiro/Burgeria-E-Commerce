import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food/food.service';
import { StarRatingComponent } from '../partials/star-rating/star-rating.component';
import { CartService } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, CommonModule, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;
  title = 'Burgeria';

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private router: Router, private titleService: Title) { 
    activatedRoute.params.subscribe((params) => {
      if(params['nameId'])
        this.food = foodService.getFoodByNameId(params['nameId']);
        if (this.food.nameId == params['nameId']) {
          this.titleService.setTitle(`${this.title} - ${this.food.name}`);
        } else {
          this.titleService.setTitle(`${this.title} - Não Encontrado`);
        }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/carrinho');
  }
}
