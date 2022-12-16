import { Pageable, Sort } from "./shared-interface";

export interface UsertypeResponse {
    content:          Usertype[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    numberOfElements: number;
    sort:             Sort;
    number:           number;
    first:            boolean;
    size:             number;
    empty:            boolean;
}

export interface Usertype {
    id:         number;
    name:       string;
    developers: number;
}

