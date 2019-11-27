import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  public buscar(procura:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',

      })
    }
    return this.httpClient.get('https:viacep.com.br/ws/'+ procura +'/json/', httpOptions);
  }
}

