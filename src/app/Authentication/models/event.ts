import { IUser } from "./iuser";
import { Categorie } from "./categorie";
import { FileHandle } from "./FileHandle";

import { Salle } from "./salle";

export class Event {
    id!: number
    titre!: string;
    description!: any;
    prixPlace!: number;
    heureDebut!: string;
    dateOrganisation!: string;
    salle!: Salle;
    categorie!: Categorie;
    user!: IUser;
    eventImage: FileHandle[] = []; 
}
