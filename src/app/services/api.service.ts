import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public https : HttpClient) { }

  traerDatosGitHub()
  {
    return this.https.get("https://api.github.com/users/nahuelcisa");
  }

  traerPaises()
  {
    return this.https.get('https://restcountries.com/v2/alpha?codes=ng,za,esp,fr');
  }
}
