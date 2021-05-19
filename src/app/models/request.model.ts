import { User } from "./user.model";

export interface RequestUsers {       
 ttusuarios?: User[]       
}

export interface RequestAction {  
    pcaccion?: String,
    dsUsuariosDemo?: RequestUsers      
}

export interface IRequest {  
    request?: RequestAction      
}


export class Request implements IRequest {    
    constructor(
        public request?: RequestAction
    ) {}
}
