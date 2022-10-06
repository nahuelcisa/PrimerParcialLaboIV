import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.scss']
})
export class AltaPizzaComponent implements OnInit {

  public grupoControles !: FormGroup;

  nombre : string = "";
  ingredientes : string = "";
  precio : number = 0;
  peso : number = 0;
  agregado : string = "";

  constructor(public fs : FirestoreService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre' : ['',Validators.required],
      'ingredientes' : ['',[Validators.required]],
      'precio' : ['',[Validators.required]],
      'peso' : ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
    });
  }

  cargarPizza(){
    let pizza = {
      nombre : this.grupoControles.get("nombre")?.value,
      ingredientes : this.grupoControles.get("ingredientes")?.value,
      precio : parseInt(this.grupoControles.get("precio")?.value),
      peso : parseInt(this.grupoControles.get("peso")?.value)
    }

    this.fs.AltaPizza(pizza).then((response)=>{
      this.agregado = "Se agrego la pizza.";
      setTimeout(()=>{
        this.agregado = '';
        this.grupoControles.reset();
      },3000)
    }).catch((response =>{
      this.agregado = "No se pudo agregar la pizza";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    }))
  }

}
