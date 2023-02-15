import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-usuario-edit-user-routed',
  templateUrl: './usuario-edit-user-routed.component.html',
  styleUrls: ['./usuario-edit-user-routed.component.css']
})
export class UsuarioEditUserRoutedComponent implements OnInit {

    id: number = 0;
    oUsuario: IUsuario = null;
    oUsuario2Form: IUsuario2Form = null;
    oUsuario2Send: IUsuario2Send = null;
    oForm: FormGroup<IUsuario2Form>;

    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";

    constructor(
        private oRouter: Router,
        private oActivatedRoute: ActivatedRoute,
        private oUsuarioService: UsuarioService,
        private oFormBuilder: FormBuilder,
        private oTipousuarioService: TipousuarioService,
      ) {
        this.id = oActivatedRoute.snapshot.params['id'];
      }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
          apellido1: [data.apellido1, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
          apellido2: [data.apellido2, [ Validators.minLength(2), Validators.maxLength(15)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,9}$')]],
          usuario: [data.usuario, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
          id_tipousuario: [data.tipousuario.id]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      apellido1: this.oForm.value.apellido1,
      apellido2: this.oForm.value.apellido2,
      email: this.oForm.value.email,
      usuario: this.oForm.value.usuario,
      tipousuario: { id: this.oForm.value.id_tipousuario }
    }
    if (this.oForm.valid) {
      this.oUsuarioService.updateOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "CasaMarruecos";
          this.modalContent = "Datos actualizados";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/user/usuario/view', this.id])
    })
    this.myModal.show()
  }

}
