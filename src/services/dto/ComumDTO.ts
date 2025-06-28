import { IsString, Length } from "class-validator";
import { UsuarioDTO } from "./UsuarioDTO";

export class ComumDTO extends UsuarioDTO {
    @IsString()
    @Length(11)
    CPF!: string;
}