import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { Vacationrequest1Component } from './vacationrequest1/vacationrequest1.component';
import { Employeedetails1Component } from './employeedetails1/employeedetails1.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'vacationrequest1',
        component: Vacationrequest1Component
    },
    
    {
        path: 'employeedetails1',
        component: Employeedetails1Component
    },
];
