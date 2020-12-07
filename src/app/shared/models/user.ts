import { Ploeg } from './ploeg';

export class User {
    constructor(
        //Nodige informatie
        public email: string,
        public naam: string, 
        public geboortedatum: Date,
        public foto: string,
        public passwoord: string,
        public isAdmin : boolean,
        
        public ploegID?: number,
        //Optioneel voor nieuw gemaakte objecten
        public userID?: number, 
        public token?: string,
        public ploeg?: Ploeg
    ){}
}