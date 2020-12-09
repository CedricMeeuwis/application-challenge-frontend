import { User } from './user';
import { Wedstrijd } from './wedstrijd';
import { Tournooi } from './tournooi';
import { Competitie } from './competitie';

export class MatchContext {
    constructor(
        //Nodige informatie
        public matchContextID: number,
        public tournooiNiveau?: number,
        public tournooiRangschikking?: number,
        
        public wedstrijdID?: number, 
        public wedstrijd?: Wedstrijd,
        public tournooiID?: number,
        public tournooi?: Tournooi,
        public competitieID?: User,
        public competitie?: Competitie,
    ){}
}