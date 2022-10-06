import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo: 'bienvenido'},
  {path:'bienvenida', component: BienvenidaComponent},
  {path:'login', component: LoginComponent},
  {path:'pizzas', component: PizzasComponent, canActivate: [AdminGuard]},
  { path: 'repartidor', loadChildren: () => import('./repartidor/repartidor.module').then(m => m.RepartidorModule) , canActivate: [UserGuard]},
  { path : '**', component: BienvenidaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
