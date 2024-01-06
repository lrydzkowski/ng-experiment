import { Routes } from '@angular/router';
import { HomePageComponent } from './features/core/pages/home-page/home-page.component';
import { ProductsListPageComponent } from './features/catalog/pages/products-list-page/products-list-page.component';
import { WebsocketNotificationsPageComponent } from './features/notifications/pages/websocket-notifications-page/websocket-notifications-page.component';
import { SignalrNotificationsPageComponent } from './features/notifications/pages/signalr-notifications-page/signalr-notifications-page.component';
import { NotFoundPageComponent } from './features/core/pages/not-found-page/not-found-page.component';
import { ProductPageComponent } from './features/catalog/pages/product-page/product-page.component';
import { SimpleFormPageComponent } from './features/catalog/pages/simple-form-page/simple-form-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductsListPageComponent },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'simple-form', component: SimpleFormPageComponent },
  { path: 'websocket-notifications', component: WebsocketNotificationsPageComponent },
  { path: 'signalr-notifications', component: SignalrNotificationsPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];
