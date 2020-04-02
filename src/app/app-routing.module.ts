import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormHomeComponent } from './form-home/form-home.component';
import { componentFactoryName } from '@angular/compiler';
import { FormInscripComponent } from './form-inscrip/form-inscrip.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { FormLoginComponent } from './form-login/form-login.component';


const routes: Routes = [
  {
    path:'',
    component:FormHomeComponent

  },

  {
    path:'form-inscrip',
    component:FormInscripComponent
  },
  {
    path:'form-recherche',
    component:FormRechercheComponent
  },
  {
    path:'form-login',
    component:FormLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
