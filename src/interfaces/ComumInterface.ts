import { UsuarioInterface } from "./UsuarioInterface";

export interface ComumInterface extends Omit<UsuarioInterface,"id"> {
    cpf:string;
}