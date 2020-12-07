import { User } from './user';

export class Wedstrijd {
    constructor(
        //Nodige informatie
        public homeScore: number,
        public awayScore: number,
        public bezig: boolean,
        
        //Optioneel voor nieuw gemaakte objecten
        public wedstrijdID?: number, 

        public homeUser1ID?: number,
        public homeUser1?: User,
        public homeUser2ID?: number,
        public homeUser2?: User,
        public awayUser1ID?: number,
        public awayUser1?: User,
        public awayUser2ID?: number,
        public awayUser2?: User,
    ){}
}