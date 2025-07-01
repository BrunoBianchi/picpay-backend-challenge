import { Comum } from "../../database/entity/Comum";
import { ComumInterface } from "../../interfaces/ComumInterface";
import { LojistInterface } from "../../interfaces/LojistaInterface";
import { Lojista } from "../../database/entity/Lojista";
import {BaseService} from "../BaseService";

class ComumService extends BaseService<ComumInterface>{
    constructor(){
        super(Comum);
    }
}

class LojistaService extends BaseService<LojistInterface>{
    constructor(){
        super(Lojista);
    }
}

export const comumService = new ComumService();
export const lojistaService = new LojistaService();

