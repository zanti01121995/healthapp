import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientRegComponent } from './components/patient-reg/patient-reg.component';
import { PatientTableComponent } from './components/patient-table/patient-table.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';

const routes: Routes = [
  {path:'', 
  children : [{path:'',component:HomeComponent},
    {path:'add',component:PatientRegComponent},
  {path:'view',component:ViewPatientComponent},
  {path:"up",component:UpComingComponent},
  {path:"list",component:PatientTableComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
