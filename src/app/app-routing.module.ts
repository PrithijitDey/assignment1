import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: "admin",loadChildren:()=> import('./lazycomps/lazycomps.module')
      .then(mod=>mod.LazycompsModule),
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
