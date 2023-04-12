import { Centre } from "./centre";
import { Event } from "./event";
import { Place } from "./place";

export class Salle {
    id!: number;
    name!: string;
    nbrPlace!: number;
    places!: Place; 
    demandeEvent!: Event;

}
