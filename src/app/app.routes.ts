import { Routes } from '@angular/router';
import { HomoComp } from './homo-comp/homo-comp';
import { AboutComp } from './about-comp/about-comp';
import { ContactComp } from './contact-comp/contact-comp';

export const routes: Routes = [
    {path:'',component:HomoComp},
    {path:'about',component:AboutComp},
    {path:'contact',component:ContactComp}

];
