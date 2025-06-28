import { AppDataSource } from "../../database/database";
import { Comum } from "../../database/entity/Comum";
import { ComumInterface } from "../../interfaces/ComumInterface";
import { validate } from "class-validator";
import { ComumDTO } from "../dto/ComumDTO";
const comumRepository = AppDataSource.getRepository(Comum);

export const createUsuarioComum = async(user:ComumInterface):Promise<ComumInterface> => {
    const dto = Object.assign(new ComumDTO(user));
    const verificationDTO = await validate(dto);
    if(verificationDTO.length > 0){
        throw new Error("Erro na validação do DTO");
    }
    const comum:ComumInterface = comumRepository.create(user);
    await comumRepository.save(comum);
    return comum;
}