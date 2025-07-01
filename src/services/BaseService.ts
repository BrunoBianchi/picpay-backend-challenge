import { Repository } from "typeorm";
import { UsuarioInterface } from "../interfaces/UsuarioInterface";
import { AppDataSource } from "../database/database";
import { validate, ValidationError } from "class-validator";
import { UsuarioDTO } from "./dto/UsuarioDTO";
import { APIError, APIErrors } from "./ApiError";



export abstract class BaseService<T extends Omit<UsuarioInterface, "id">| UsuarioDTO> {
    private repository: Repository<T>;
    constructor(private repositoryClass: new () => T) {
        this.repository = AppDataSource.getRepository(repositoryClass);
    }
    
    public async createAndInsert(data:T,dtoCLass:new (user:T) => UsuarioDTO){
      const dto:UsuarioDTO  = new dtoCLass(data)
      const validateDTO:ValidationError[] = await validate(dto)
      if(validateDTO.some(error => error.constraints)){
        throw new APIError(APIErrors.dtoError,JSON.stringify(validateDTO) );
      }
      const userDB = await this.repository.create(data);
      return this.repository.save(userDB);
    }
}