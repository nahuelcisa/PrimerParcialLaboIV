import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  @Input () pizza : any = "";
  pizzaEnviar : any = ""; 

  agregado : string = "";
  pizzas : any = "";
  constructor(public fs : FirestoreService) { 
    this.fs.ListaPizzas().subscribe((value)=>{
      this.pizzas = value;
    });
  }

  ngOnInit(): void {
  }

  enviar(pizza : any)
  {
    this.pizzaEnviar = pizza;
  }

  recibirPizza($event : any){
    this.pizza = $event;
    this.fs.AltaPizza(this.pizza).then(()=>{
      this.agregado = "Se agrego la pizza";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    })

    
  }

}
