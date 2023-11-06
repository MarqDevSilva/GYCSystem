import { Component, OnInit } from '@angular/core';
import { ListService } from './service/list.service';
import { Observable } from 'rxjs';
import { info } from '../../shrared/model/info';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit{

  eventos: Observable<info[]>

  inscritos = "10";

  constructor(private service: ListService){
    this.eventos =  this.service.list().pipe()
  }

  ngOnInit(): void {}
}
