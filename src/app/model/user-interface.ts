import { FormControl } from "@angular/forms";

export interface IUser {
    username: FormControl<string>;
    password: FormControl<string>;
}
