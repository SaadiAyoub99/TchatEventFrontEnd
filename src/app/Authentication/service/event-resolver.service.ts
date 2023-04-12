import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Event } from '../models/event';
import { Place } from '../models/place';
import { EventsService } from './events.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<Event>{

  constructor(private eventService: EventsService,
    private imageProcessingService: ImageProcessingService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Event | Observable<Event> | Promise<Event> {
    throw new Error('Method not implemented.');
  }
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
  //   const id = route.paramMap.get("idEvent");

  //   if (id) {
  //     return this.eventService.getDemandeDetailsById(id)
  //     .pipe(
  //       map(p => this.imageProcessingService.createImages(p))
  //     );
  //   } else {
  //     return of(this.getErrorMessage());
  //   }
  // }

  getErrorMessage() {
    return {
      id: 0,
      titre: "",
      description: "",
      prixPlace: 0,
      heureDebut: "",
      dateOrganisation: "",
      salle: {
        id: 0,
        name: "",
        nbrPlace: 0,
        places: [], 
      },
      categorie: {
        id:0, 
        name: "",
      },
      user: {
        userFirstName: "",
        userLastName: "",
      },
      eventImage: [],
  };
}
}
