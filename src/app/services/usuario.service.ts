import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientService } from "./http-client.service";
import UsuarioGetModel from "src/app/models/usuario/usuario-get.model";
import UsuarioAddRequestModel from "src/app/models/usuario/usuario-add.model";
import UsuarioUpdateRequestModel, {UsuarioUpdateRequestCompostModel} from "src/app/models/usuario/usuario-update.model";

@Injectable({ providedIn: "root" })
export class UsuarioService {
    constructor(private client: HttpClientService) {

    }

    AddAsync = (usuario: UsuarioAddRequestModel): Observable<UsuarioGetModel> =>
        this.client.Add<UsuarioGetModel, UsuarioAddRequestModel>("usuario", usuario);

    UpdateAsync = (usuario: UsuarioUpdateRequestModel): Observable<boolean> => {
        const request = {props: [], dados: usuario} as UsuarioUpdateRequestCompostModel; 
        return this.client.Update<boolean, UsuarioUpdateRequestCompostModel>(`usuario`, request);
    }

    RemoveAsync = (id: string): Observable<boolean> => this.client.Delete(`usuario/${id}`);

    GetByIdAsync = (id: string): Observable<UsuarioGetModel> => this.client.Get<UsuarioGetModel>(`usuario/${id}`);
    
    GetAsync = (): Observable<UsuarioGetModel[]> => this.client.Get<UsuarioGetModel[]>(`usuario`);
}