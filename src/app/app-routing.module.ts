import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo: 'bienvenido'},
  {path:'bienvenida', component: BienvenidaComponent},
  {path:'login', component: LoginComponent},
  { path: 'repartidor', loadChildren: () => import('./repartidor/repartidor.module').then(m => m.RepartidorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
