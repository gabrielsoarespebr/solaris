import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { EnrollmentComponent } from './features/enrollment/enrollment.component';
import { AdvantagesComponent } from './features/advantages/advantages.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent
},
{
  path: "",
  redirectTo: "home",
  pathMatch: "full"
},
{
  path: "enrollment",
  component: EnrollmentComponent
},
{
  path: "advantages",
  component: AdvantagesComponent
},
{
  path: "about",
  component: AboutComponent
},
{
  path: "contact",
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
