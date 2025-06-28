import { IsString,Length } from "class-validator";
import { UsuarioDTO } from "./UsuarioDTO";

export class LojistaDTO extends UsuarioDTO {
    @IsString()
    @Length(14)
    CNPJ!:string;
}