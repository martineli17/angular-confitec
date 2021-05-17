import {Escolaridade} from './usuario-escolaridade.model';

type UsuarioGetModel = {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: Escolaridade; 
}
export default UsuarioGetModel;