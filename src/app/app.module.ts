import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { RepartidorDetalleComponent } from './components/repartidor-detalle/repartidor-detalle.component';
import { ListadoRepartidoresComponent } from './components/listado-repartidores/listado-repartidores.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { DetallesRepartidorComponent } from './components/detalles-repartidor/detalles-repartidor.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    RepartidorDetalleComponent,
    ListadoRepartidoresComponent,
    DetallePaisComponent,
    DetallesRepartidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
