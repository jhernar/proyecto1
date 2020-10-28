import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule} from '@angular/common/http';

import { DataService } from './data.service'


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
