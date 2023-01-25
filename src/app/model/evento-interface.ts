import { FormControl } from "@angular/forms";

export interface IEvento {
    id: number;
    descripcion: string;
    fecha: Date;
}

export interface IEvento2Form {
    id:          FormControl<number>;
    descripcion:    FormControl<string>;
    fecha:     FormControl<Date>;
}
export interface IEvento2Send {
    id:          number;
    descripcion:    string;
    fecha:     Date;
}
