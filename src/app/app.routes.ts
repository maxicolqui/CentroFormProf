import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'Inicio',pathMatch:'full'},
    {path:'Inicio',component:HomeComponent}
];
