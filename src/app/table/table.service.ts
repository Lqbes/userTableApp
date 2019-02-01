import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableInterface } from '../table.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {}

  getBigTable(): Observable<TableInterface[]> {
    return this.http.get<TableInterface[]>('http://localhost:3000/ELEMENT_DATA_BIG');    
  }

  getSmallTable(): Observable<TableInterface[]> {
    return this.http.get<TableInterface[]>('http://localhost:3000/ELEMENT_DATA_SMALL');    
  }

  getOwnTable(): Observable<TableInterface[]> {
    return this.http.get<TableInterface[]>('http://localhost:3000/ELEMENT_DATA_OWN');    
  }

  
}
