import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Admin } from './admin/admin';


export const routes: Routes = [
   
    {path:"home" ,component:Home},
    {path:"admin",
        loadComponent:()=>import('./admin/admin').then(m=>m.Admin)
    }

];
