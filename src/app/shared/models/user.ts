import { Ploeg } from './ploeg';

export class User {
    constructor(
        //Nodige informatie
        public email: string,
        public naam: string, 
        public geboortedatum: Date,
        public foto: string,
        public isAdmin : boolean,
        public isKapitein: boolean,
    
        //Optioneel voor nieuw gemaakte objecten
        public passwoord?: string,
        public userID?: number, 
        public ploegID?: number,
        public ploeg?: Ploeg,
        public token?: string,
    ){}
}