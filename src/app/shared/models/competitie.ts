export class Competitie {
    constructor(
        //Nodige informatie
        public naam: string,
        public periode: string,
        public participentAantal: number,
        //Optioneel voor nieuw gemaakte objecten
        public competitieID?: number, 
    ){}
}