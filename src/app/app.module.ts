import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListPageComponent } from './features/catalog/pages/products-list-page/products-list-page.component';
import { SpyDirective } from './features/catalog/directives/spy.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomePageComponent } from './features/core/pages/home-page/home-page.component';
import { TopBarComponent } from './features/core/components/top-bar/top-bar.component';
import { TitleBarComponent } from './features/core/components/title-bar/title-bar.component';
import { MatCardModule } from '@angular/material/card';
import { WebsocketNotificationsPageComponent } from './features/notifications/pages/websocket-notifications-page/websocket-notifications-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListPageComponent,
    SpyDirective,
    HomePageComponent,
    TopBarComponent,
    TitleBarComponent,
    WebsocketNotificationsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgFor,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
