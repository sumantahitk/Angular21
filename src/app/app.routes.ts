import { Routes } from '@angular/router';
import { HomoComp } from './homo-comp/homo-comp';
import { AboutComp } from './about-comp/about-comp';
import { ContactComp } from './contact-comp/contact-comp';

import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './dashboard/setting/setting';

export const routes: Routes = [
    {path:'',component:HomoComp},
    {path:'about',component:AboutComp},
    {path:'contact',component:ContactComp},

    {path:'dashboard',component:Dashboard,
        children:[
            {path:'profile',component:Profile},
            {path:'setting',component:Setting}
        ]
    },

    {path:'',redirectTo:'',pathMatch:'full'}


];
