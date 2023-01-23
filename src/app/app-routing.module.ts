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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
