import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetialPageComponent } from './listing-detial-page/listing-detial-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path: 'listings', component: ListingsPageComponent , pathMatch: 'full'},
  {path: 'listings/:id', component: ListingDetialPageComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listing/:id' ,component: EditListingPageComponent},
  {path: 'my-listings', component: MyListingPageComponent},
  {path: 'new-listing' , component: NewListingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
