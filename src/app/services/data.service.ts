import { Items } from '../models/Items';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Items[]>{
  return  this.http.get<Items[]>('../assets/data.json')
  }

  getDataDetail(id:number): Observable<Items[]>{

    return this.http.get<Items[]>('../assets/data.json').pipe(map((response:any[])=>{
      return response.find((data:any)=>data.id==id)
    }))
  }
}
