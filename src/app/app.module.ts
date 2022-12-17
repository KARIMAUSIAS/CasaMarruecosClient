import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioDeleteAdminRoutedComponent } from './component/application/usuario/routed/usuario-delete-admin-routed/usuario-delete-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { TipousuarioFinderAdminUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-finder-admin-unrouted/tipousuario-finder-admin-unrouted.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    CryptoService,
    DecodeService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
