import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentersComponent } from './centers/centers.component';
import { DeliveryAgenceComponent } from './delivery-agence/delivery-agence.component';
import { EventComponent } from './event/event.component';
import { PublicationComponent } from './publication/publication.component';
import { RecycledProductComponent } from './recycled-product/recycled-product.component';
import { WasteComponent } from './waste/waste.component';



const routes: Routes = [

  { path: 'centers', component: CentersComponent },
  { path: 'delivery-agence', component: DeliveryAgenceComponent },
  { path: 'event', component: EventComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'recycled-product', component: RecycledProductComponent },
  { path: 'waste', component: WasteComponent },



  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optional: default route
  { path: '**', redirectTo: '/home' }, // Optional: wildcard route



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
