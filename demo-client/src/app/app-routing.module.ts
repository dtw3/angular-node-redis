import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesInsertupdateComponent } from './components/employees-insertupdate/employees-insertupdate.component';

const routes: Routes = [
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'employees-insertupdate', component: EmployeesInsertupdateComponent },
  { path: '', redirectTo: '/employees-list', pathMatch: 'full' },
  { path: '**', component: EmployeesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
