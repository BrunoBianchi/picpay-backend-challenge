import { DataSource } from "typeorm";
import { Comum } from "./entity/Comum";
import { Lojista } from"./entity/Lojista";
import {Transacao} from "./entity/Transacao";
import { Usuario } from "./entity/Usuario";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "picpay",
    synchronize: true,
    logging: false,
    entities: [Comum,Lojista,Transacao],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
});