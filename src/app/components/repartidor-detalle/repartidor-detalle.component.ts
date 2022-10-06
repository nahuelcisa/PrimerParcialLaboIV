import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.scss']
})
export class RepartidorDetalleComponent implements OnInit {

  repartidor : any = "";

  constructor() { }

  ngOnInit(): void {
  }

  recibirRepartidor($event : any)
  {
    this.repartidor = $event;
  }

  limpiar()
  {
    this.repartidor = "";
  }

}
