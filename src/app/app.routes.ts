import { Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [

    {path: "films", component : FilmsComponent},
     { path: 'profile', component: UserProfileComponent },

];
