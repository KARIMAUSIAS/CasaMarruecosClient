
import { FormControl } from "@angular/forms";
import { IEntity } from "./generic-types-interface";
import { ITeam } from "./team-interface";

import { Usertype } from "./usertype-response-interface";




export interface IDeveloper {
    id:          number;
    name:        string;
    surname:     string;
    lastname:    string;
    email:       string;
    username:    string;
    issues:      number;
    teams:       number;
    resolutions: number;
    helps:       number;
    team:        ITeam;
    usertype:    Usertype;
}

export interface IDeveloper2Form {
    id:          FormControl<number>;
    name:        FormControl<string>;
    surname:     FormControl<string>;
    lastname:    FormControl<string>;
    email:       FormControl<string>;
    username:    FormControl<string>;
    id_team:        FormControl<number>;
    id_usertype:    FormControl<number>;
}
export interface IDeveloper2Send {
    id:          number;
    name:        string;
    surname:     string;
    lastname:    string;
    email:       string;
    username:    string;
    team:        IEntity;
    usertype:    IEntity;
}