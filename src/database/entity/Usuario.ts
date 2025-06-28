import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { hash,genSalt } from "bcrypt";

@Entity()
export class Usuario {
    
    @PrimaryColumn({ type: "varchar",unique:true})
    id: string = `Usuario_${uuidv4()}`;

    @Column()
    nome!:string;

    @Column({unique:true})
    email!:string;

    @Column()
    senha!:string;
    @BeforeInsert()
    async hashSenha(){
        const salt = await genSalt(10);
        this.senha = await hash(this.senha, salt);
    }

    @Column({type:"numeric"})
    saldo!:number;
}