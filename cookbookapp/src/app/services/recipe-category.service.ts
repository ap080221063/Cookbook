import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { config } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { RecipeCategory } from '../classes/recipeCategory';

@Injectable()
export class RecipeCategoryService {

  public recipeCategoryList = new Subject<RecipeCategory[]>();
  public Server = config.serverurl + ':' + config.serverport + '/';

  constructor(private http: HttpClient) { }

  public getAllRecipeCategories(): void {
    this.http.get<any>(this.Server + 'recipecategorylist/' + 'all')
            .subscribe(data => this.recipeCategoryList.next(data));
  }

}
