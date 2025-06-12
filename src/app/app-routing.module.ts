import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { VotersComponent } from './pages/voters/voters.component';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './core/shared/login/login.component';
import { SignupComponent } from './core/shared/signup/signup.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent }, // Default route
  
  { path: 'dashboard', component: DashboardComponent }, // Default route
  { path: 'users', component: UserComponent },
  { path: 'voters', component: VotersComponent },
  { path: 'candidate', component: CandidateComponent }, // Example with a parameter
  { path: 'login', component: LoginComponent }, // Example with a parameter
  { path: 'signup', component: SignupComponent }, // Example with a parameter
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
