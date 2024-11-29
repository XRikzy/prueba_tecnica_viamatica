import { IsDate, IsOptional, IsString } from "class-validator";

export class CreatePersonDTO {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;
  @IsString()
  identification!: string;
  @IsDate()
  BornDate!: Date;
}

export class UpdatePersonDTO {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsString()
  Identification!: string;
}
