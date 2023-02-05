import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxStripeModule } from 'ngx-stripe';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStripeModule.forRoot(
      'pk_test_51MY4IxSBAh58gJJH4lXZzRrDldEDvES1XAl5IT6OhXNoQJBG9YQVsKhwwBxtbNWnaAHbgmazVJoKDxOzyX3bGDO300kDltUsCk'
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
