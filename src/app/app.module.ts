import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CentersComponent } from './centers/centers.component';
import { DeliveryAgenceComponent } from './delivery-agence/delivery-agence.component';
import { PublicationComponent } from './publication/publication.component';
import { WasteComponent } from './waste/waste.component';
import { EventComponent } from './event/event.component';
import { RecycledProductComponent } from './recycled-product/recycled-product.component';


@NgModule({
  declarations: [
    AppComponent,
    CentersComponent,
    DeliveryAgenceComponent,
    PublicationComponent,
    WasteComponent,
    EventComponent,
    RecycledProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
