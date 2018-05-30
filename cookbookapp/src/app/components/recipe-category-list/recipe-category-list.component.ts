import { Component, OnInit } from '@angular/core';
import { RecipeCategory } from '../../classes/recipeCategory';
import { Subscription } from 'rxjs/Subscription';
import { RecipeCategoryService } from '../../services/recipe-category.service';

@Component({
  selector: 'app-recipe-category-list',
  templateUrl: './recipe-category-list.component.html',
  styleUrls: ['./recipe-category-list.component.css']
})
export class RecipeCategoryListComponent implements OnInit {

  // public recipeCategoryService: RecipeCategoryService;
  recipeCategoryListSubscription: Subscription;
  recipeCategoryList: RecipeCategory[];

  constructor(public recipeCategoryService: RecipeCategoryService) {
    this.recipeCategoryList = [];
    this.recipeCategoryListSubscription = this.recipeCategoryService.recipeCategoryList
    .subscribe(categories => {this.recipeCategoryList = categories; });

  }

  ngOnInit() {
    this.recipeCategoryService.getAllRecipeCategories();
  }

}
