import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoryListComponent } from './recipe-category-list.component';

describe('RecipeCategoryListComponent', () => {
  let component: RecipeCategoryListComponent;
  let fixture: ComponentFixture<RecipeCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
