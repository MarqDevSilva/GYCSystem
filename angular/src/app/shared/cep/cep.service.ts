import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  getCEP(cep: string): Observable<any> {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(
        map((data: any) => {
          if (data.erro) {
            // CEP inválido
            console.log(data)
            return { valid: false, message: 'Cidade não encontrada para o CEP informado' };
          } else {
            // CEP válido e cidade encontrada
            return { valid: true, data };
          }
        }),
        catchError(error => {
          // Tratar erros da requisição, se necessário
          console.error('CEP Inválido:', error);
          return of({ valid: false, message: 'CEP Inválido' });
        })
      );
  }
}
