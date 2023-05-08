import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product-service.service';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { PaymentStatusComponent } from './components/payment-status/payment-status.component';
import { PaymentService } from './services/payment-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PaymentStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [ProductService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
