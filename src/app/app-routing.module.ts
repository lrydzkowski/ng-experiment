import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/core/pages/home-page/home-page.component';
import { ProductsListPageComponent } from './features/catalog/pages/products-list-page/products-list-page.component';
import { WebsocketNotificationsPageComponent } from './features/notifications/pages/websocket-notifications-page/websocket-notifications-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductsListPageComponent },
  { path: 'websocket-notifications', component: WebsocketNotificationsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
