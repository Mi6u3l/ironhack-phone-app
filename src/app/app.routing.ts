import { Routes } from '@angular/router';

import { PhoneDetailsComponent } from './components/phone-details/phone-details.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'phone/:id', component: PhoneDetailsComponent },
  { path: '**', redirectTo: '' }
];
