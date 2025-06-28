import { Entity, PrimaryColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity() 
export class Lojista extends Usuario {
    @PrimaryColumn({unique:true,nullable:false})
    CNPJ!:string;
}