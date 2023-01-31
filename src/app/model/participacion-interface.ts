import { IEvento } from './evento-interface';
import { IEntity } from './generic-types-interface';
import { FormControl } from '@angular/forms';
import { IUsuario } from './usuario-interface';


export interface IParticipacion {
    id: number;
    usuario: IUsuario;
    evento: IEvento;
}

export interface IParticipacion2Form {
    id:          FormControl<number>;
    id_usuario:    FormControl<number>;
    id_evento: FormControl<number>;
}
export interface IParticipacion2Send {
    id: number;
    usuario: IEntity;
    evento: IEntity
}
