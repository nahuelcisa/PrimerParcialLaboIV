import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.scss']
})
export class ModificarPizzaComponent implements OnInit {

  @Input () set pedidoAModificar(value : any)
  {
    this.cargarDatos(value);
  }

  id : any = "";

  agregado : string = "";
  public grupoControles !: FormGroup;


  constructor(private fb : FormBuilder, public fs : FirestoreService) {
    
    this.grupoControles = this.fb.group({
      'nombre': [],
      'ingredientes' : ['',[Validators.required]],
      'precio' : ['',[Validators.required]],
      'peso' : ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
    });
   }

  ngOnInit(): void {
  }

  modificarPizza(){
    let pizza = {
      nombre : this.grupoControles.get('nombre')?.value,
      ingredientes : this.grupoControles.get('ingredientes')?.value,
      precio : this.grupoControles.get('precio')?.value,
      peso : this.grupoControles.get('peso')?.value
    }
    console.log(pizza);
    this.fs.ModificarPizza(pizza, this.id).then((response)=>{
      this.agregado = "Se modifico la pizza.";
      setTimeout(()=>{
        this.agregado = '';
        this.grupoControles.reset();
      },3000)
    }).catch((response =>{
      this.agregado = "No se pudo modificar la pizza";
      setTimeout(() => {
        this.agregado = "";
      }, 3000);
    }))
  
  }

  cargarDatos(value : any)
  {
    this.grupoControles.get('nombre')?.setValue(value.nombre);
    this.grupoControles.get('ingredientes')?.setValue(value.ingredientes);
    this.grupoControles.get('precio')?.setValue(value.precio);
    this.grupoControles.get('peso')?.setValue(value.peso);

    this.id = value.id;
  }

}
