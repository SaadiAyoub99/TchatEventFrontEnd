import { Categorie } from "./categorie";
import { FileHandle } from "./file-handle";
import { Salle } from "./salle";

export class Event {
    titre!: string;
    description!: string;
    prixPlace!: number;
    heureDebut!: string;
    dateOrganisation!: Date;
    salle!: Salle;
    categorie!: Categorie;
    image!: FileHandle[]; 

}
