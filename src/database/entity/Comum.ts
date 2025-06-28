import { Entity, PrimaryColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Comum extends Usuario {
    @PrimaryColumn({unique:true,nullable:false})
    cpf!:string;
}