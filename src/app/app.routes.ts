import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { User } from './user/user';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'home', component: Home },
      // { path: 'login', component: Login },
      // { path: 'about', component: About },
      // { path: 'contact', component: Contact },
      // { path: 'user/:id', component: User },     
      // { path: 'profile/:name', component: Profile },
      { path: '**', redirectTo: 'home' },
];
