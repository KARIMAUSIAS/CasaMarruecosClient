import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITipousuario2Form, ITipousuario2Send } from 'src/app/model/tipousuario-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-tipousuario-new-admin-routed',
  templateUrl: './tipousuario-new-admin-routed.component.html',
  styleUrls: ['./tipousuario-new-admin-routed.component.css']
})
export class TipousuarioNewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oUsuario: IUsuario = null;
    oTipousuario2Form: ITipousuario2Form = null;
    oTipousuario2Send: ITipousuario2Send = null;
    oForm: FormGroup<ITipousuario2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    tipousuarioDescription: string = "";
    id_tipousuario:number;

    constructor(
      private oRouter: Router,
      private oTipousuarioService: TipousuarioService,
      private oFormBuilder: FormBuilder,
      private oSessionService: SessionService,
    ) {
    }

    ngOnInit() {
        this.oSessionService.check;
      this.oForm = <FormGroup>this.oFormBuilder.group({
        id: [''],
        nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      });
    }

    onSubmit() {
      console.log("onSubmit");
      this.oTipousuario2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre,
      }
      if (this.oForm.valid) {
        this.oTipousuarioService.newOne(this.oTipousuario2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Tipo Usuario " + data + " created";
            this.showModal(data);
          }
        })
      }

    }

    showModal = (data) => {
        this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
          keyboard: false
        })
        var myModalEl = document.getElementById(this.mimodal);
        myModalEl.addEventListener('hidden.bs.modal', (event): void => {
          this.oRouter.navigate(['/admin/tipousuario/view', data])
        })
        this.myModal.show()
      }

}
