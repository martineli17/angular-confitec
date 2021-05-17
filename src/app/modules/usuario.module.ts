import { NgModule } from "@angular/core";
import {UsuarioAddComponent} from '../components/usuario/add/usuario-add.component';
import {UsuarioListComponent} from '../components/usuario/list/usuario-list.component';
import {UsuarioContainerComponent} from '../components/usuario/usuario-container.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {FormBasicModules} from '../modules/form-basic.module';

@NgModule({
    declarations: [UsuarioAddComponent, UsuarioListComponent, UsuarioContainerComponent],
    imports: [FormBasicModules, AngularMaterialModule],
    exports: [UsuarioAddComponent]
})
export class UsuarioModule{

}