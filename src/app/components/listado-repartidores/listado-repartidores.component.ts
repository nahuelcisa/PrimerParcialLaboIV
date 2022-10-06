import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.scss']
})
export class ListadoRepartidoresComponent implements OnInit {

  @Output() repartidorEvent = new EventEmitter<any>();

  repartidores : any = "";

  constructor(private fs : FirestoreService) { 
    this.fs.ListaRepartidores().subscribe((value)=>{
      this.repartidores = value;
    })
  }

  ngOnInit(): void {
  }

  enviarRepartidor(repartidor : any)
  {
    this.repartidorEvent.emit(repartidor);
    
  }

}
