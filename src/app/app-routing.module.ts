import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo: 'bienvenido'},
  {path:'bienvenida', component: BienvenidaComponent},
  {path:'login', component: LoginComponent},
  { path: 'repartidor', loadChildren: () => import('./repartidor/repartidor.module').then(m => m.RepartidorModule) , canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
