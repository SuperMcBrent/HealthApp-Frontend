import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './components/root/app.component';
import { HomeComponent } from './components/home/home.component';
import { WeightComponent } from './components/weight/weight.component';
import { ProfileSelectComponent } from './components/profile-select/profile-select.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddWeightComponent } from './components/weight/add-weight/add-weight.component';
import { PreviousWeightComponent } from './components/weight/previous-weight/previous-weight.component';
import { CompareWeightComponent } from './components/weight/compare-weight/compare-weight.component';
import { ReadableDateTimePipe } from './pipes/readable-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeightComponent,
    ProfileSelectComponent,
    ProfileComponent,
    AddWeightComponent,
    PreviousWeightComponent,
    CompareWeightComponent,
    ReadableDateTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
