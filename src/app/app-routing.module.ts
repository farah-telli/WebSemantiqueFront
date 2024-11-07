import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [




  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optional: default route
  { path: '**', redirectTo: '/home' }, // Optional: wildcard route



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
