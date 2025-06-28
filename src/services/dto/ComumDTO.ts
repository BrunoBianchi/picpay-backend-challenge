import { IsString, Length } from "class-validator";
import { UsuarioDTO } from "./UsuarioDTO";
import { ComumInterface } from "../../interfaces/ComumInterface";

export class ComumDTO extends UsuarioDTO {


    constructor(user:ComumInterface) {
        super(user);
        this.cpf = user.cpf;
       
    }
    @IsString()
    @Length(11)
    cpf!: string;

}