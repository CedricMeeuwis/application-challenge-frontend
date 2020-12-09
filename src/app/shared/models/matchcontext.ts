import{ Competitie } from './competitie';
import{ Tournooi } from './tournooi';

export class MatchContext {
    constructor(
        public tournooiNiveau?: number,
        public tournooiRangschikking?: number,
        public tournooiID?: number,
        public tournooi?: Tournooi,
        public competitieID?: number,
        public competitie?: Competitie,
        public matchContextID?: number, 
    ){}
}