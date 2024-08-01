import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CartService } from '../../../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, CommonModule, NotFoundComponent, RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private router: Router, private titleService: Title) { 
    activatedRoute.params.subscribe((params) => {
      if(params['nameId'])
        this.food = foodService.getFoodByNameId(params['nameId']);
        if (this.food.nameId == params['nameId']) {
          this.titleService.setTitle(`${this.food.name} | Burgeria`);
        } else {
          this.titleService.setTitle(`Produto não encontrado | Burgeria`);
        }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/carrinho');
  }
}
