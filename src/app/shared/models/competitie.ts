export class Competitie {
    constructor(
        //Nodige informatie
        public periode: string,
        public participentAantal: number,
        //Optioneel voor nieuw gemaakte objecten
        public competitieID?: number, 
    ){}
}