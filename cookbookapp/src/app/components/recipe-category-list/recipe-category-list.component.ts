import { Component, OnInit } from '@angular/core';
import { RecipeCategory } from '../../classes/recipeCategory';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-category-list',
  templateUrl: './recipe-category-list.component.html',
  styleUrls: ['./recipe-category-list.component.css']
})
export class RecipeCategoryListComponent implements OnInit {

  componentRecipeCategoryListSubscription: Subscription;
  componentRecipeCategoryList: RecipeCategory[];

  constructor() { }

  ngOnInit() {
  }

}
