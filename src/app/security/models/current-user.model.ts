export class CurrentUser {
    constructor(
        //Nodige informatie
        public email: string,
        public naam: string, 
        public isAdmin : boolean,
        public isKapitein: boolean,
        public userID?: number,
        public ploegID?: number,
    ){}
}


