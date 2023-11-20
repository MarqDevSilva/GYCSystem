import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent {

  constructor(
    public snackBar: MatSnackBar,
    public route: ActivatedRoute
  ){}

  public showSnackBar(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  public getRouteId(): string{
    return this.route.snapshot.paramMap.get('id') ?? '';
  }
}
