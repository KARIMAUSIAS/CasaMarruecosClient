import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ITipousuario, ITipousuario2Form, ITipousuario2Send } from 'src/app/model/tipousuario-interface';
declare let bootstrap: any;

@Component({
  selector: 'app-tipousuario-edit-admin-routed',
  templateUrl: './tipousuario-edit-admin-routed.component.html',
  styleUrls: ['./tipousuario-edit-admin-routed.component.css']
})
export class TipousuarioEditAdminRoutedComponent implements OnInit {

    id: number = 0;
    oTipousuario: ITipousuario = null;
    oTipousuario2Form: ITipousuario2Form = null;
    oTipousuario2Send: ITipousuario2Send = null;
    oForm: FormGroup<ITipousuario2Form>;
    // modal
    mimodal: string = "miModal";
    myModal: any;
    modalTitle: string = "";
    modalContent: string = "";
    // foreigns
    tipousuarioDescription: string = "";

    constructor(
      private oRouter: Router,
      protected oLocation: Location,
      private oActivatedRoute: ActivatedRoute,
      private oTipousuarioService: TipousuarioService,
      private oFormBuilder: FormBuilder,
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
      this.getOne();

    }

    getOne() {
      this.oTipousuarioService.getOne(this.id).subscribe({
        next: (data: ITipousuario) => {
          this.oTipousuario = data;
          console.log(data);
          this.oForm = <FormGroup>this.oFormBuilder.group({
            id: [data.id, [Validators.required]],
            nombre: [data.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
          });
        }
      })
    }

    onSubmit() {
      console.log("onSubmit");
      this.oTipousuario2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre
      }
      if (this.oForm.valid) {
        this.oTipousuarioService.updateOne(this.oTipousuario2Send).subscribe({
          next: (data: number) => {
            //open bootstrap modal here
            this.modalTitle = "CasaMarruecos";
            this.modalContent = "Tipo Usuario " + this.id + " updated";
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
        this.oRouter.navigate(['/admin/tipousuario/view', this.id])
      })
      this.myModal.show()
    }


}
