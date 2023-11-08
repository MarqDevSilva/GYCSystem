import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventNewService {

  private next = new Subject<void>();
  private router = new Subject<void>();
  private id!: string | null;

  nextTab$ = this.next.asObservable();
  routerId$ = this.router.asObservable();

  nextTab() {
    this.next.next();
  }

  routerId(id: string | null){
    this.id = id;
    this.router.next();
  }

  getId() {
    return this.id;
  }
}
