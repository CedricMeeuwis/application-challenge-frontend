import { User } from './user';

export class Ploeg {
    constructor(
        //Nodige informatie
        public naam: string,
        public bedrijfsnaam: string, 
        public locatie: string,
        public ploegFoto: string,
        //Optioneel voor nieuw gemaakte objecten
        public ploegID?: number, 
    ){}
}