import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HouseComponent } from './contact/house/house.component';

export const routes: Routes = [
    {path:'',redirectTo:'Inicio',pathMatch:'full'},
    {path:'Inicio',component:HomeComponent},
    {path:"Contacto",component:HouseComponent}
];
