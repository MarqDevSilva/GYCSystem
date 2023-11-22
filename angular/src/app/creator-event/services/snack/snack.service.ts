import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Snack } from 'src/app/shared/model/snack';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class SnackService extends GenericService<Snack>{

  constructor(http: HttpClient) {
    super(http, '/api/refeicoes');
  }
}
