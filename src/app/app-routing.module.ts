import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KabanHomeComponent } from './kaban-home/kaban-home.component';
import { KabanLandingComponent } from './kaban-landing/kaban-landing.component';

const routes: Routes = [

  {
    path:'home', component:KabanHomeComponent
  },
  {
    path:'landing', component:KabanLandingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
