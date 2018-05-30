import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCategoryListComponent } from './components/recipe-category-list/recipe-category-list.component';
import { RecipeCategoryService } from './services/recipe-category.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeCategoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RecipeCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
