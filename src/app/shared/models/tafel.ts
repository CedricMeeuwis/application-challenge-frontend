import { User } from './user';

export class Tafel {
    constructor(
        //Nodige informatie
        public naam: string,
        public bedrijfsnaam: string, 
        public adres: string,
        public foto: string,
        public contactNaam: string,
        public contactTelefoon: string,
        public contactEmail: string,
        //Optioneel voor nieuw gemaakte objecten
        public tafelID?: number, 
    ){}
}