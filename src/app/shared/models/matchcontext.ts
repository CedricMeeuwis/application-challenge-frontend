import { User } from './user';
import { Wedstrijd } from './wedstrijd';
import { Tournooi } from './tournooi';
import { Competitie } from './competitie';

export class MatchContext {
    constructor(
        //Nodige informatie
        public tournooiNiveau?: number,
        public tournooiRangschikking?: number,
        //Optioneel
        public tournooiID?: number,
        public tournooi?: Tournooi,
        public competitieID?: number,
        public competitie?: Competitie,
        public matchContextID?: number,

    ){}
}