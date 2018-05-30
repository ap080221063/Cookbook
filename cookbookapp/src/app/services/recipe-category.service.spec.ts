import { TestBed, inject } from '@angular/core/testing';

import { RecipeCategoryService } from './recipe-category.service';

describe('RecipeCategoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeCategoryService]
    });
  });

  it('should be created', inject([RecipeCategoryService], (service: RecipeCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
