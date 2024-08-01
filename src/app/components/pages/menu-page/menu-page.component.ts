import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, RouterLink, TitleComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {
  foods: Food[] = [];
  
  constructor(private foodService: FoodService) { 
    this.foods = foodService.getAll();
  }
}
