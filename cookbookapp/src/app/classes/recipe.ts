import { RecipeStep } from './recipestep';
import { Product } from './product';
import { RecipeCategory } from './recipeCategory';

export class Recipe {

    name: string;
    recipesteps: RecipeStep[];
    ingredients: Product[];
    category: RecipeCategory;

    constructor(name: string) {
        this.name = name;
    }

}
