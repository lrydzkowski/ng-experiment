import { Routes } from '@angular/router';
import { HomePageComponent } from './features/core/pages/home-page/home-page.component';
import { ProductsListPageComponent } from './features/catalog/pages/products-list-page/products-list-page.component';
import { WebsocketNotificationsPageComponent } from './features/notifications/pages/websocket-notifications-page/websocket-notifications-page.component';
import { SignalrNotificationsPageComponent } from './features/notifications/pages/signalr-notifications-page/signalr-notifications-page.component';
import { NotFoundPageComponent } from './features/core/pages/not-found-page/not-found-page.component';
import { ProductPageComponent } from './features/catalog/pages/product-page/product-page.component';
import { SimpleFormPageComponent } from './features/catalog/pages/simple-form-page/simple-form-page.component';
import { LoginPageComponent } from './features/core/pages/login-page/login-page.component';
import { anonymousGuard } from './features/core/guards/anonymous.guard';
import { authGuard } from './features/core/guards/auth.guard';
import { ProfilePageComponent } from './features/core/pages/profile-page/profile-page.component';
import { WordsPageComponent } from './features/lexica/pages/words-page/words-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [anonymousGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard] },
  { path: 'products', component: ProductsListPageComponent, canActivate: [authGuard] },
  { path: 'product/:productId', component: ProductPageComponent, canActivate: [authGuard] },
  { path: 'simple-form', component: SimpleFormPageComponent, canActivate: [authGuard] },
  { path: 'websocket-notifications', component: WebsocketNotificationsPageComponent, canActivate: [authGuard] },
  { path: 'signalr-notifications', component: SignalrNotificationsPageComponent, canActivate: [authGuard] },
  { path: 'words', component: WordsPageComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];
