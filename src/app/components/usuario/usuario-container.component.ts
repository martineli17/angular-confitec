import { Component, OnInit } from "@angular/core";
import UsuarioAddRequestModel from "src/app/models/usuario/usuario-add.model";
import UsuarioGetModel from "src/app/models/usuario/usuario-get.model";
import UsuarioUpdateRequestModel from "src/app/models/usuario/usuario-update.model";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Notificador } from "src/app/shared/notificador";

@Component({
    templateUrl: "./usuario-container.component.html",
})
export class UsuarioContainerComponent implements OnInit {
    usuarios: UsuarioGetModel[] = [];
    usuarioToForm: UsuarioGetModel = {} as UsuarioGetModel;
    constructor(private service: UsuarioService,
        private notificador: Notificador) {
    }

    ngOnInit() {
        this.GetAll();
    }

    Send(usuario: UsuarioGetModel): void {
        console.log(usuario);
        if (usuario.id)
            this.Update(usuario as UsuarioUpdateRequestModel);
        else
            this.Add(usuario as UsuarioAddRequestModel);
    }

    SendToForm(usuario: UsuarioGetModel): void {
        this.usuarioToForm = usuario;
    }
    
    GetAll = () => {
        this.service.GetAsync().subscribe({
            next: usuarios => this.usuarios = usuarios,
            error: err => this.notificador.ExibirNotificacao("Erro ao buscar os usuários!")
        });
    }

    Delete = (id: string) => this.service.RemoveAsync(id).subscribe({
        next: usuario => {
            this.notificador.ExibirNotificacao("Usuário excluído com sucesso!");
            this.GetAll();
        },
        error: err => this.notificador.ExibirNotificacao("Erro ao excluir o usuário!")
    });

    private Add(usuario: UsuarioAddRequestModel): void {
        this.service.AddAsync(usuario).subscribe({
            next: usuario => {
                this.notificador.ExibirNotificacao("Usuário cadastrado com sucesso!");
                this.GetAll();
            },
            error: error => {
                this.notificador.ExibirNotificacao("Erro ao cadastrar o usuário!");
            }
        });
    }

    private Update(usuario: UsuarioUpdateRequestModel): void {
        this.service.UpdateAsync(usuario).subscribe({
            next: usuario => {
                this.notificador.ExibirNotificacao("Usuário atualizado com sucesso!");
                this.GetAll();
            },
            error: error => {
                this.notificador.ExibirNotificacao("Erro ao atualizar o usuário!");
            }
        });
    }
}