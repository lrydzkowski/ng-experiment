import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { ProductsListComponent } from './features/catalog/components/products-list/products-list.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
