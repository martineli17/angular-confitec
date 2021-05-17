import {Escolaridade} from './usuario-escolaridade.model';

type UsuarioAddRequestModel = {
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: Escolaridade; 
}

export default UsuarioAddRequestModel;