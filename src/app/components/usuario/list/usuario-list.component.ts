import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UsuarioService } from 'src/app/services/usuario.service';
import UsuarioGetModel from "src/app/models/usuario/usuario-get.model";

@Component({
    templateUrl: "./usuario-list.component.html",
    selector: "confitec-usuario-list"
})

export class UsuarioListComponent {
    _usuarios: UsuarioGetModel[] = [];
    @Input() usuarios: UsuarioGetModel[] = [];
    @Output() Excluir = new EventEmitter<string>();
    @Output() Atualizar = new EventEmitter<UsuarioGetModel>();
    constructor() {
    }

    Delete = (id: string) => this.Excluir.emit(id); 

    Update = (usuario: UsuarioGetModel) => this.Atualizar.emit(usuario); 
}