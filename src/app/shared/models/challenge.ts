import { User } from './user';
import { Ploeg } from './ploeg';
import { Wedstrijd } from './wedstrijd';

export class Challenge {
    constructor(
        //Nodige informatie
        public uitgedaagdePloegID: number,
        public geaccepteerd: boolean,
        public afgewezen: boolean,

        //Optioneel voor nieuw gemaakte objecten
        public challengeID?: number, 
        public uitgedaagdePloeg?: Ploeg,
        public uitdagerUserID?: number,
        public uitdagerUser?: User,
        public uitdagerPloegID?: number,
        public uitdagerPloeg?: Ploeg,
        public wedstrijdID?: number,
        public wedstrijd?: Wedstrijd
    ){}
}