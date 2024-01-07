import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListPageComponent } from './products-list-page.component';
import { Product } from '../../model/product';
import { of } from 'rxjs';
import { ProductsApiClientService } from '../../services/products-api-client.service';

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
    productsApiClientSpy.getProducts.and.returnValue(of(products));
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

  it('contains pre with product id', () => {
    const componentHtmlElement: HTMLElement = fixture.nativeElement;
    const pre = componentHtmlElement.querySelector('pre[data-productId="1"]')!;
    expect(pre.innerHTML).toContain('id: 1');
  });
});
