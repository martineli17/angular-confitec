import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioContainerComponent } from './components/usuario/usuario-container.component';

const routes: Routes = [];
routes.push({path: "", component: UsuarioContainerComponent})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
