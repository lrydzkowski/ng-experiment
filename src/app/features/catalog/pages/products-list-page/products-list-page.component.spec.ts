import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListPageComponent } from './products-list-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsListPageComponent', () => {
  let component: ProductsListPageComponent;
  let fixture: ComponentFixture<ProductsListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsListPageComponent, HttpClientModule],
    });
    fixture = TestBed.createComponent(ProductsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
