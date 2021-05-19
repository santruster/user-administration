

export interface IUser {
    nrousu?: number;
    usuario?: string;
    activo?: Boolean;
    clave?: string;
    nombre?:string;
    apellido?: string;
    email?: boolean;
    direccion?: string;
    telefono?: string;
    imagen64?: string;
}

export class User implements IUser {
    
    constructor(
        public nrousu?: number,
        public usuario?: string,
        public activo?: Boolean,
        public clave?: string,
        public nombre?:string,
        public apellido?: string,
        public email?: boolean,
        public direccion?: string,
        public telefono?: string,
        public imagen64?: string
    ) {}
}
