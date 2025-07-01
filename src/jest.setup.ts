import "reflect-metadata";
import { AppDataSource } from "./database/database";
beforeAll(async()=>{
    await  AppDataSource.initialize();
    await AppDataSource.synchronize();
})