import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { PatientRegComponent } from './components/patient-reg/patient-reg.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { DetailsTableComponent } from './components/details-table/details-table.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PatientTableComponent } from './components/patient-table/patient-table.component';



@NgModule({
  declarations: [
    HomeComponent,
    PatientHistoryComponent,
    PatientRegComponent,
    UpComingComponent,
    DetailsTableComponent,
   PatientTableComponent
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  
  ]
})
export class AdminModule { }
