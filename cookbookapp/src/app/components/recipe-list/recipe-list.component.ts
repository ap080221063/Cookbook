import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../../classes/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  componentRecipeListSubscription: Subscription;
  componentRecipeList: Recipe[];

  constructor() {

   }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
