import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Event } from '../models/event';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  API = "http://localhost:8088"
  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  )

  event : Event = new Event(); 

  constructor(private httpClient: HttpClient) { }

  getListPendingDemande(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.API+"/AllPending")
    .pipe(
      map((resp: any) => resp)
  )
  }

  public getCategorie(): Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(this.API+"/AllCategorie")
    .pipe(
      map((resp: any) => resp)
  )
  }

  getSalle(): Observable<Salle[]>{
    return this.httpClient.get<Salle[]>(this.API+"/AllSalle")
    .pipe(
      map((resp: any) => resp)
  )
  }

  public createDemande(event: Event, id:number){
    return this.httpClient.post<Event>(this.API+"/createDemande?id="+id, event)
    .pipe(
      map((resp: any) => resp)
  ) 
  }


}
