import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';




const routes: Routes = [
  {path:'listado', component: ListadoComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'listado'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
