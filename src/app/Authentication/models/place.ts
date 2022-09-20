import { Salle } from "./salle";

export class Place {
    id!: number;
    numero!: number;
    reserved!: boolean;
    salle!: Salle;
}
