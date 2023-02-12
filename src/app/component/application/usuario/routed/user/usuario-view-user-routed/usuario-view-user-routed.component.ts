import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interface';

@Component({
  selector: 'app-usuario-view-user-routed',
  templateUrl: './usuario-view-user-routed.component.html',
  styleUrls: ['./usuario-view-user-routed.component.css']
})
export class UsuarioViewUserRoutedComponent implements OnInit {

  id: number = 0;
  oUsuario: IUsuario = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

  }
}
