import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from '../components/alta-repartidor/alta-repartidor.component';
import { RepartidorComponent } from './repartidor.component';

const routes: Routes = [{ path: 'altaRepartidor', component: AltaRepartidorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
