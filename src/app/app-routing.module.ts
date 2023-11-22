import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/core/pages/home-page/home-page.component';
import { ProductsListPageComponent } from './features/catalog/pages/products-list-page/products-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductsListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
