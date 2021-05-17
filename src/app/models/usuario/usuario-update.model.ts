import {Escolaridade} from './usuario-escolaridade.model';

type UsuarioUpdateRequestModel = {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: Escolaridade; 
}

export type UsuarioUpdateRequestCompostModel = {
    props: string[];
    dados: UsuarioUpdateRequestModel;
}

export default UsuarioUpdateRequestModel;