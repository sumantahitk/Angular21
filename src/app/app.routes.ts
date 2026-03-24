import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { AboutComp } from './about-comp/about-comp';
import { ContactComp } from './contact-comp/contact-comp';
import { PageNotFound } from './page-not-found/page-not-found';


export const routes: Routes = [
   
 {path:'',component:HomeComp},
 {path:'about',component:AboutComp},
 {path:'contact', component:ContactComp},


 //WildCard route for a 404 page can be added here
 {path:'**' ,component:PageNotFound,}
];
