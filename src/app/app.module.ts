import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './component/shared/unrouted/pagination/pagination.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { CryptoService } from './service/crypto.service';
import { DecodeService } from './service/decode.service';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioDeleteAdminRoutedComponent } from './component/application/usuario/routed/usuario-delete-admin-routed/usuario-delete-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { TipousuarioFinderAdminUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-finder-admin-unrouted/tipousuario-finder-admin-unrouted.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-view-admin-routed/tipousuario-view-admin-routed.component';
import { TipousuarioDetailAdminUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-detail-admin-unrouted/tipousuario-detail-admin-unrouted.component';
import { TipousuarioDeleteAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-delete-admin-routed/tipousuario-delete-admin-routed.component';
import { TipousuarioNewAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-new-admin-routed/tipousuario-new-admin-routed.component';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/tipousuario-edit-admin-routed/tipousuario-edit-admin-routed.component';
import { UsuarioFinderAdminUnroutedComponent } from './component/application/usuario/unrouted/usuario-finder-admin-unrouted/usuario-finder-admin-unrouted.component';
import { IncidenciaPlistAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-plist-admin-routed/incidencia-plist-admin-routed.component';
import { IncidenciaViewAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-view-admin-routed/incidencia-view-admin-routed.component';
import { IncidenciaDetailAdminUnroutedComponent } from './component/application/incidencia/unrouted/incidencia-detail-admin-unrouted/incidencia-detail-admin-unrouted.component';
import { IncidenciaDeleteAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-delete-admin-routed/incidencia-delete-admin-routed.component';
import { IncidenciaNewAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-new-admin-routed/incidencia-new-admin-routed.component';
import { IncidenciaEditAdminRoutedComponent } from './component/application/incidencia/routed/incidencia-edit-admin-routed/incidencia-edit-admin-routed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    PaginationComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UsuarioPlistAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    UsuarioDeleteAdminRoutedComponent,
    UsuarioEditAdminRoutedComponent,
    TipousuarioFinderAdminUnroutedComponent,
    LogoutComponent,
    GenerateComponent,
    TipousuarioPlistAdminRoutedComponent,
    TipousuarioViewAdminRoutedComponent,
    TipousuarioDetailAdminUnroutedComponent,
    TipousuarioDeleteAdminRoutedComponent,
    TipousuarioNewAdminRoutedComponent,
    TipousuarioEditAdminRoutedComponent,
    UsuarioFinderAdminUnroutedComponent,
    IncidenciaPlistAdminRoutedComponent,
    IncidenciaViewAdminRoutedComponent,
    IncidenciaDetailAdminUnroutedComponent,
    IncidenciaDeleteAdminRoutedComponent,
    IncidenciaNewAdminRoutedComponent,
    IncidenciaEditAdminRoutedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CalendarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CryptoService,
    DecodeService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
