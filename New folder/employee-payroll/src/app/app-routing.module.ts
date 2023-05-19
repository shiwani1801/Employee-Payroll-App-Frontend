import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'homepage', pathMatch:'full'},
{path:'homepage', component:HomePageComponent},
{path: 'add-employee', component: AddEmployeeComponent},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
