import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Event } from '../models/event';
import { Place } from '../models/place';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  API = "http://localhost:8088"


  event: Event = new Event();

  constructor(private httpClient: HttpClient) { }


  public getCategorie(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(this.API + "/AllCategorie")
      .pipe(
        map((resp: any) => resp)
      )
  }

  public getSalle(): Observable<Salle[]> {
    return this.httpClient.get<Salle[]>(this.API + "/AllSalle")
      .pipe(
        map((resp: any) => resp)
      )
  }

  public getPlaceOfSalle(idSalle: number): Observable<Place[]>{
    return this.httpClient.get<Place[]>(this.API+"/PlaceBySalle?id=" + idSalle)
  }

  public createDemande(event: FormData, id: number, idSalle: number, idCategorie: number) {
    return this.httpClient.post<Event>(this.API + '/createDemande/' + idSalle + '/' + idCategorie + '?id=' + id, event)
      .pipe(
        map((resp: any) => resp)
      )
  }

  public deleteDemande(id: number) {
    return this.httpClient.delete(this.API + "/SupprimerEvent?id=" + id);
  }

  public getDemandeDetailsById(id: string){
    return this.httpClient.get<Event>(this.API + "/getDemandeDetailsById/" + id);
  }

  public acceptedDemande(id: number) {
    return this.httpClient.post<any>(this.API + "/accepteDemande?id=" + id, {})
  }

  public refuseDemande(id: number) {
    return this.httpClient.post<any>(this.API + "/refuseDemande?id=" + id, {})

  }

  public CancelReservedPlace(id: number){
    return this.httpClient.post<any>(this.API + "/annulerReservation?id=" + id, {})
  }

  getListPendingDemande(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.API + "/AllPending")
      .pipe(
        map((resp: any) => resp)
      )
  }

    getAllReserverPlaces(): Observable<Place[]> {
    return this.httpClient.get<Place[]>(this.API + "/AllReserved")
      .pipe(
        map((resp: any) => resp)
      )
  }

  public getAllAcceptedDemandes(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.API + "/PublishedEvents")
    .pipe(
      map((resp: any) => resp)
    )
  }

  getPendingDemandeByUserId(id: any) {
    return this.httpClient.get<Event[]>(this.API + '/MyPending/' + id)
      .pipe(
        map((resp: any) => resp)
      )
  }

  getAcceptedDemandeByUserId(id: number){
    return this.httpClient.get<Event[]>(this.API+'/MyAccepted/' +id)
    .pipe(
      map((resp: any) => resp)
    )
  }

  getRefusedEventByUserId(id: number){
    return this.httpClient.get<Event[]>(this.API+'/MyRefused/'+id)
    .pipe(
      map((resp: any) => resp)
    )
  }

  reservedPlace(idPlace: number, idUser: number){
    return this.httpClient.post<any>(this.API+'/reserved/'+idPlace+'?idUser='+idUser, {})
    .pipe(
      map((resp: any) => resp)
    )
  }


}
