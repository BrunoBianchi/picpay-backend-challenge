import { IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, IsStrongPassword, Min } from "class-validator";

export class UsuarioDTO {
    constructor(partial:Partial<UsuarioDTO>){
        Object.assign(this,partial);
    }

    @IsString()
    @IsNotEmpty()
    nome!:string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!:string;

    @IsStrongPassword({minLength:8})
    senha!:string;

    @IsNotEmpty()
    @IsNumber({allowNaN:false})
    @IsPositive()
    @Min(0.01)
    saldo!:number;
}