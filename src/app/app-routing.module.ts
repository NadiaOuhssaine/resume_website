import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ApiPageComponent } from './api-page/api-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingPageComponent, outlet: 'landing' },
  { path: 'landing', component: LandingPageComponent, outlet: 'landing' },
  { path: 'about', component: ResumePageComponent },
  { path: 'api', component: ApiPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
