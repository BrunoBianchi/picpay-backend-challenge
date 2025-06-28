import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class Transacao {
    @PrimaryColumn({unique:true})
    id:string = `Transaction_${uuidv4()}`

    @Column()
    quantia!:number;

    @Column()
    data:Date = new Date();
    
}

