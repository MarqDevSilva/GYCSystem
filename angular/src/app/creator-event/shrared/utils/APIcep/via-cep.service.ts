import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViaCEPService {

  constructor(private httpClient: HttpClient) { }

  getCEP(cep: string){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
    .pipe(
      delay(2000)
    );
  }
}
