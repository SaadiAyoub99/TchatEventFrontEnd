import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Event } from '../models/event';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  API = "http://localhost:8088"

  event : Event = new Event(); 

  constructor(private httpClient: HttpClient) { }

  getListPendingDemande(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.API+"/AllPending")
  }

  public getCategorie(){
    return this.httpClient.get<Categorie[]>(this.API+"/AllCategorie")

  }

  getSalle(): Observable<Salle[]>{
    return this.httpClient.get<Salle[]>(this.API+"/AllSalle")

  }

  public createDemande(event: FormData, id:number){
    return this.httpClient.post<Event>(this.API+"/createDemande?id="+id, event);
  }


}
