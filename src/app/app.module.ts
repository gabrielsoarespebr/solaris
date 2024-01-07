import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { EnrollmentComponent } from './features/enrollment/enrollment.component';
import { AdvantagesComponent } from './features/advantages/advantages.component';
import { EducationLevelsComponent } from './features/home/components/education-levels/education-levels.component';
import { DailyRoutineComponent } from './features/home/components/daily-routine/daily-routine.component';
import { BannerCarouselComponent } from './features/home/components/banner-carousel/banner-carousel.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EnrollmentComponent,
    AdvantagesComponent,
    EducationLevelsComponent,
    DailyRoutineComponent,
    BannerCarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
