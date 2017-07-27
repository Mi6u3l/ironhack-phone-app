import { Routes } from '@angular/router';

import { PhoneDetailsComponent } from './components/phone-details/phone-details.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { LoginComponent } from './components/login/login.component';
import { SessionService } from './services/session.service';

export const routes: Routes = [
  { path: '', component: PhoneListComponent, canActivate: [SessionService] },
  { path: 'login', component: LoginComponent },
  { path: 'phone/:id', component: PhoneDetailsComponent, canActivate: [SessionService] },
  { path: '**', redirectTo: '' }
];
