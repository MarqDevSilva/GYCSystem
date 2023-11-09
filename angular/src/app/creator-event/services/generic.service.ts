import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export declare const API_TOKEN: InjectionToken<any>;

@Injectable({
  providedIn: 'root'
})
export class GenericService<T>{

  constructor(
    public http: HttpClient,
    @Inject(API_TOKEN)
    public API: string) { }

    save(item: Partial<T>): Observable<T> {
      return this.http.post<T>(this.API, item);
    }

    update(item: Partial<T>, id: string): Observable<T> {
      return this.http.put<T>(`${this.API}/${id}`, item);
    }

    get(id: string): Observable<T> {
      return this.http.get<T>(`${this.API}/${id}`);
    }

    list(): Observable<T[]> {
      return this.http.get<T[]>(this.API);
    }

    delete(id: string): Observable<T> {
      return this.http.delete<T>(`${this.API}/${id}`);
    }
}
