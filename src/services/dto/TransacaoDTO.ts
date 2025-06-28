import { IsDate, IsNotEmpty, isNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class TransacaoDTO {
    @IsDate()
    data!:Date;

    @IsNumber()
    @IsNotEmpty()
    @Min(0.01)
    @IsPositive()
    quantia!:number;
}