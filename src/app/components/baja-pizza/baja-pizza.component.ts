import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-baja-pizza',
  templateUrl: './baja-pizza.component.html',
  styleUrls: ['./baja-pizza.component.scss']
})
export class BajaPizzaComponent implements OnInit {

  @Input () pizza : any = "";
  public grupoControles !: FormGroup;


  constructor(public fs : FirestoreService, private fb : FormBuilder) {
    this.grupoControles = this.fb.group({
      'nombre': [],
      'ingredientes' : ['',[Validators.required]],
      'precio' : ['',[Validators.required]],
      'peso' : ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
    });
   }

  ngOnInit(): void {
  }

  eliminarPizza(id : number){ 
    this.fs.BajaPizza(this.pizza.id);
  }

}
