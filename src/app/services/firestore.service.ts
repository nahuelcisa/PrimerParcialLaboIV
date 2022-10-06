import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc,collectionData, doc, deleteDoc} from '@angular/fire/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  storage : any;
  repartidorCollectionReference : any;
  pizzaCollectionReference : any;

  constructor(public FireStore: Firestore) {
    this.storage = getStorage();
    this.repartidorCollectionReference = collection(this.FireStore,'repartidores');
    this.pizzaCollectionReference = collection(this.FireStore,'pizzas');
  }

  AltaRepartidores(repartidor: any){
    return addDoc(this.repartidorCollectionReference, repartidor);
  }

  ListaRepartidores():Observable<any[]>{
    return collectionData(this.repartidorCollectionReference,{idField: 'id'}) as Observable<any[]>;
  }

  ListaPizzas():Observable<any[]>{
    return collectionData(this.pizzaCollectionReference,{idField: 'id'}) as Observable<any[]>;
  }

  AltaPizza(pizza : any){
    return addDoc(this.pizzaCollectionReference, pizza);
  }

  ModificarPizza(pizza:any,id:any){
    const pizzaDocRef = doc(this.FireStore, `pizzas/${id}`);
    return updateDoc(pizzaDocRef,pizza);
  }

  BajaPizza(idPizza: any){
    const pizzaDocRef = doc(this.FireStore, `pizzas/${idPizza}`);
    return deleteDoc(pizzaDocRef);
  }
}
