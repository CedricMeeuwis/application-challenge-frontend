export class CurrentUser {
    constructor(
        //Nodige informatie
        public email: string,
        public naam: string, 
        public isAdmin : string,
        public isKapitein: string,
        public userID?: number,
        public ploegID?: number,
    ){}
}


