import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';
import { EventComponent } from '../app/event/event.component';
import { DonationComponent } from '../app/donation/donation.component';
import { VolunteerComponent } from '../app/volunteer/volunteer.component';
import { HomeComponent } from '../app/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
  path: 'about',
  component: AboutComponent
},  
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'event',
  component: EventComponent
},
{
  path:'home',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
