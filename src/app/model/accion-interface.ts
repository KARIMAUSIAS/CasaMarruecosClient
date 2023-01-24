import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { IIncidencia } from "./incidencia-interface";

export interface IAccion {
    id: number;
    fecha: Date;
    descripcion: string;
    incidencia: IIncidencia;
}

export interface IAccion2Form {
    id:          FormControl<number>;
    fecha:     FormControl<Date>;
    descripcion:    FormControl<string>;
    id_incidencia:    FormControl<number>;
}
export interface IAccion2Send {
    id:          number;
    fecha:     Date;
    descripcion:    string;
    incidencia: IEntity;
}
