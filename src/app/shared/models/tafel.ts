import { User } from './user';

export class Tafel {
    constructor(
        //Nodige informatie
        public naam: string,
        public bedrijfsnaam: string, 
        public adres: string,
        public foto: string,

        public contactpersoonID: number,
        //Optioneel voor nieuw gemaakte objecten
        public tafelID: number, 
        public contactpersoon?: User,
    ){}
}