
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})

export class DecodeService {
    constructor() { }


    decode(token: string): any {
        const _decodeToken = (token) => {
            try {
                return JSON.parse(atob(token));
            } catch {
                return;
            }
        };
        return token
            .split('.')
            .map(token => _decodeToken(token))
            .reduce((acc, curr) => {
                if (!!curr) acc = { ...acc, ...curr };
                return acc;
            }, Object.create(null));
    }


}
