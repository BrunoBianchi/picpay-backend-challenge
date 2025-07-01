import { UserType } from "../types/userType";

export interface LojistInterface extends Omit<UserType,"id"> {
    cnpj:string;
}