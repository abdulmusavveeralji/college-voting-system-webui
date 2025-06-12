import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/shared/header/header.component';
import { SideMenuComponent } from './core/shared/side-menu/side-menu.component';
import { UserComponent } from './pages/user/user.component';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { VotersComponent } from './pages/voters/voters.component';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './core/shared/login/login.component';
import { SignupComponent } from './core/shared/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicTableComponent } from './lib/dynamic-table/dynamic-table.component';
import { DynamicFormComponent } from './lib/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    UserComponent,
    CandidateComponent,
    VotersComponent,
    LayoutComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    DynamicTableComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
