import { FormControl } from "@angular/forms";
import { ITipousuario } from "./tipousuario-interface";
import { IEntity } from "./generic-types-interface";

    export interface IUsuario {
        id: number;
        nombre: string;
        apellido1: string;
        apellido2: string;
        email: string;
        tipousuario: ITipousuario;
        usuario: string;
        participaciones: number;
    }

    export interface IUsuario2Form {
        id:          FormControl<number>;
        nombre:        FormControl<string>;
        apellido1:     FormControl<string>;
        apellido2:    FormControl<string>;
        email:       FormControl<string>;
        usuario:    FormControl<string>;
        id_tipousuario:    FormControl<number>;
    }
    export interface IUsuario2Send {
        id:          number;
        nombre:        string;
        apellido1:     string;
        apellido2:    string;
        email:       string;
        usuario:    string;
        tipousuario: IEntity;
    }

