import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

export const routes: Routes = [

    {path: '', component: DashboardComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'add', component: NewEmployeeComponent},
    {path: 'view/:employeeId', component: ViewEmployeeComponent},
    {path: 'update/:employeeId:', component: UpdateEmployeeComponent}
];
