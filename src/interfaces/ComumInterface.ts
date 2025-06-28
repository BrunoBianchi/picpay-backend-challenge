import { UserType } from "../types/userType";

export interface ComumInterface extends Omit<UserType,"id"> {
    cpf:string;
}