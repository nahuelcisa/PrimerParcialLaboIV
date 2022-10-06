import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc,collectionData} from '@angular/fire/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  storage : any;
  repartidorCollectionReference : any;

  constructor(public FireStore: Firestore) {
    this.storage = getStorage();
    this.repartidorCollectionReference = collection(this.FireStore,'repartidores');
  }

  AltaRepartidores(repartidor: any){
    return addDoc(this.repartidorCollectionReference, repartidor);
  }

  ListaRepartidores():Observable<any[]>{
    return collectionData(this.repartidorCollectionReference,{idField: 'id'}) as Observable<any[]>;
  }

}
