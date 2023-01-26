import { FormControl } from "@angular/forms";
import { IEvento } from "./evento-interface";
import { IEntity } from "./generic-types-interface";

export interface IMultimedia {
    id: number;
    archivo: string;
    evento: IEvento;
}

export interface IMultimedia2Form {
    id:          FormControl<number>;
    archivo:    FormControl<string>;
    id_evento:    FormControl<number>;
}
export interface IMultimedia2Send {
    id:          number;
    archivo:    string;
    evento: IEntity;
}
