import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
 { path: 'signup', component: SignupComponent },
 { path: "", redirectTo: "/signup", pathMatch: 'full' },
 { path: "login", component: LoginComponent }
];
