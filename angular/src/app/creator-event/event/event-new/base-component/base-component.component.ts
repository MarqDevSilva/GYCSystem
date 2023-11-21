import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { GenericService } from 'src/app/creator-event/services/generic.service';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent {

  constructor(
    public snackBar: MatSnackBar,
    public route: ActivatedRoute,
    public dialog: MatDialog,
  ){}

  public showSnackBar(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  public getRouteId(): string{
    return this.route.snapshot.paramMap.get('id') ?? '';
  }

  public dialogShow(content: string): MatDialogRef<DialogComponent, any>{
    return this.dialog.open(DialogComponent, {
      data: {
        content: content,
        submit:  'Confirmar',
        close: 'Fechar' },
    })
  }
}
