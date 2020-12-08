export class Competitie {
    constructor(
        //Nodige informatie
        public orde: number,
        public participentAantal: number,
        //Optioneel voor nieuw gemaakte objecten
        public competitieID?: number, 
    ){}
}