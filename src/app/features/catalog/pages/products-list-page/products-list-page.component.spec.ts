import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsListPageComponent } from './products-list-page.component';
import { Product } from '../../model/product';
import { ProductsApiClientService } from '../../services/products-api-client.service';
import { asyncData } from 'src/app/features/core/helpers/testing-helpers';
import { By } from '@angular/platform-browser';

describe('ProductsListPageComponent', () => {
  let productsApiClientSpy: jasmine.SpyObj<ProductsApiClientService>;
  let component: ProductsListPageComponent;
  let fixture: ComponentFixture<ProductsListPageComponent>;

  beforeEach(() => {
    const products: Product[] = [
      {
        id: 1,
        name: 'test name',
        description: 'test description',
        price: 99.99,
      },
    ];

    productsApiClientSpy = jasmine.createSpyObj('ProductsApiClientService', ['getProducts']);
    productsApiClientSpy.getProducts.and.returnValue(asyncData(products));
    TestBed.configureTestingModule({
      imports: [ProductsListPageComponent],
      providers: [{ provide: ProductsApiClientService, useValue: productsApiClientSpy }],
    });
    fixture = TestBed.createComponent(ProductsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains pre with product id', waitForAsync(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const pre = fixture.debugElement.query(By.css('pre[data-productId="1"]'));
      expect(pre.nativeElement.innerHTML).toContain('id: 1');
    });
  }));
});
