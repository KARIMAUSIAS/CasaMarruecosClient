import { Component, Input, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-detail-user-unrouted',
  templateUrl: './usuario-detail-user-unrouted.component.html',
  styleUrls: ['./usuario-detail-user-unrouted.component.css']
})
export class UsuarioDetailUserUnroutedComponent implements OnInit {

    @Input() id: number;
    oUsuario: IUsuario;

    constructor(
      private oUsuarioService: UsuarioService
    ) { }

    ngOnInit() {
      this.getOne();
    }

    getOne() {
        this.oUsuarioService.getOne(this.id).subscribe({
          next: (data: IUsuario) => {
            this.oUsuario = data;
            console.log(data);
          }
        })
      }

}
