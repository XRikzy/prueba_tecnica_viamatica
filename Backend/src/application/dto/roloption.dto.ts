import { IsNumber, IsOptional, IsString } from "class-validator";
export class CreateRolOptionDTO {
  @IsNumber()
  idOption!: number;
  @IsString()
  nameOption!: string;
}

export class UpdateRolOptionDTO {
  @IsNumber()
  idOption!: number;
  @IsOptional()
  @IsString()
  nameOption!: string;
}
