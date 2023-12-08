import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/shared/model/evento';
import { EventoService } from 'src/app/services/evento/evento.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit{

  $eventos: Observable<Evento[]> = new Observable<Evento[]>;
  filtro = "ativo";

  inscritos = "10";

  constructor(
    private service: EventoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog){

    this.list()
  }

  ngOnInit(): void {}

  onCancel(evento: Evento, id: string | null){
    const dialog = this.dialog.open(DialogComponent, {
      data: {
        content: 'Você realemente deseja cancelar este evento?',
        submit:  'Sim',
        close: 'Não' },
    });

    dialog.afterClosed().subscribe(result => {
      if(result){
        evento.status = 'Cancelado'
        if (id) {
          this.service.update(evento, id).subscribe(
            result => {
              this.onSuccess('Evento cancelado')
              this.list()},
            error => this.onError('Ocorreu um erro ao cancelar evento'))
        }
      }
    })
  }

  private onSuccess(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private list(){
    this.$eventos =  this.service.list().pipe()
  }
}
