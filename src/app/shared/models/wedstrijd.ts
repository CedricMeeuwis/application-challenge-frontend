import { Tafel } from './tafel';
import { MatchContext } from './matchcontext';
import { User } from './user';

export class Wedstrijd {
    constructor(
        //Nodige informatie
        public team1Score: number,
        public team2Score: number,
        public bezig: boolean,
        public akkoord: boolean,
        
        //Optioneel voor nieuw gemaakte objecten
        public wedstrijdID?: number, 

        public team1User1ID?: number,
        public team1User1?: User,
        public team1User2ID?: number,
        public team1User2?: User,
        public team2User1ID?: number,
        public team2User1?: User,
        public team2User2ID?: number,
        public team2User2?: User,

        public matchContextID?: number,
        public matchContext?: MatchContext,

        public tafelID?: number,
        public tafel?: Tafel,
    ){}
}