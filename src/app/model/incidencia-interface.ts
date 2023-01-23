import { FormControl } from "@angular/forms";
import { IUsuario } from "./usuario-interface";
import { IEntity } from "./generic-types-interface";

export interface IIncidencia {
    id: number;
    lugar: string;
    fecha: Date;
    descripcion: string;
    usuario: IUsuario;
    acciones: number;
}

export interface IIncidencia2Form {
    id:          FormControl<number>;
    lugar:        FormControl<string>;
    fecha:     FormControl<Date>;
    descripcion:    FormControl<string>;
    id_usuario:    FormControl<number>;
}
export interface IIncidencia2Send {
    id:          number;
    lugar:        string;
    fecha:     Date;
    descripcion:    string;
    usuario: IEntity;
}
