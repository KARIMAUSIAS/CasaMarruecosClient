import { FormControl } from "@angular/forms";

export interface IEvento {
    id: number;
    descripcion: string;
    fecha: Date;
    imagen: String;
    participaciones: number;
    multimedias: number;
}

export interface IEvento2Form {
    id:          FormControl<number>;
    descripcion:    FormControl<string>;
    fecha:     FormControl<Date>;
    imagen: FormControl<String>;
}
export interface IEvento2Send {
    id:          number;
    descripcion:    string;
    fecha:     Date;
    imagen: String;
}
