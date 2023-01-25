import { AccionViewAdminRoutedComponent } from './component/application/accion/routed/accion-view-admin-routed/accion-view-admin-routed.component';
import { AccionPlistAdminRoutedComponent } from './component/application/accion/routed/accion-plist-admin-routed/accion-plist-admin-routed.component';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-edit-admin-routed/tipousuario-edit-admin-routed.component';
import { TipousuarioNewAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-new-admin-routed/tipousuario-new-admin-routed.component';
import { TipousuarioDeleteAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-delete-admin-routed/tipousuario-delete-admin-routed.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-view-admin-routed/tipousuario-view-admin-routed.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioDeleteAdminRoutedComponent } from './component/application/usuario/routed/usuario-delete-admin-routed/usuario-delete-admin-routed.component';
import { IncidenciaDeleteAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-delete-admin-routed/incidencia-delete-admin-routed.component';
import { IncidenciaEditAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-edit-admin-routed/incidencia-edit-admin-routed.component';
import { IncidenciaNewAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-new-admin-routed/incidencia-new-admin-routed.component';
import { IncidenciaPlistAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-plist-admin-routed/incidencia-plist-admin-routed.component';
import { IncidenciaViewAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-view-admin-routed/incidencia-view-admin-routed.component';
import { AccionDeleteAdminRoutedComponent } from './component/application/accion/routed/accion-delete-admin-routed/accion-delete-admin-routed.component';
import { AccionEditAdminRoutedComponent } from './component/application/accion/routed/accion-edit-admin-routed/accion-edit-admin-routed.component';
import { AccionNewAdminRoutedComponent } from './component/application/accion/routed/accion-new-admin-routed/accion-new-admin-routed.component';
import { EventoPlistAdminRoutedComponent } from './component/application/evento/routed/evento-plist-admin-routed/evento-plist-admin-routed.component';
import { EventoViewAdminRoutedComponent } from './component/application/evento/routed/evento-view-admin-routed/evento-view-admin-routed.component';
import { EventoDeleteAdminRoutedComponent } from './component/application/evento/routed/evento-delete-admin-routed/evento-delete-admin-routed.component';
import { EventoEditAdminRoutedComponent } from './component/application/evento/routed/evento-edit-admin-routed/evento-edit-admin-routed.component';
import { EventoNewAdminRoutedComponent } from './component/application/evento/routed/evento-new-admin-routed/evento-new-admin-routed.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRoutedComponent },
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/remove/:id', component: UsuarioDeleteAdminRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent },
  { path: 'admin/tipousuario/new', component: TipousuarioNewAdminRoutedComponent },
  { path: 'admin/tipousuario/view/:id', component: TipousuarioViewAdminRoutedComponent },
  { path: 'admin/tipousuario/remove/:id', component: TipousuarioDeleteAdminRoutedComponent },
  { path: 'admin/tipousuario/edit/:id', component: TipousuarioEditAdminRoutedComponent },
  { path: 'admin/incidencia/plist', component: IncidenciaPlistAdminRoutedComponent },
  { path: 'admin/incidencia/new', component: IncidenciaNewAdminRoutedComponent },
  { path: 'admin/incidencia/view/:id', component: IncidenciaViewAdminRoutedComponent },
  { path: 'admin/incidencia/remove/:id', component: IncidenciaDeleteAdminRoutedComponent },
  { path: 'admin/incidencia/edit/:id', component: IncidenciaEditAdminRoutedComponent },
  { path: 'admin/accion/plist', component: AccionPlistAdminRoutedComponent },
  { path: 'admin/accion/new', component: AccionNewAdminRoutedComponent },
  { path: 'admin/accion/view/:id', component: AccionViewAdminRoutedComponent },
  { path: 'admin/accion/remove/:id', component: AccionDeleteAdminRoutedComponent },
  { path: 'admin/accion/edit/:id', component: AccionEditAdminRoutedComponent },
  { path: 'admin/evento/plist', component: EventoPlistAdminRoutedComponent },
  { path: 'admin/evento/new', component: EventoNewAdminRoutedComponent },
  { path: 'admin/evento/view/:id', component: EventoViewAdminRoutedComponent },
  { path: 'admin/evento/remove/:id', component: EventoDeleteAdminRoutedComponent },
  { path: 'admin/evento/edit/:id', component: EventoEditAdminRoutedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
