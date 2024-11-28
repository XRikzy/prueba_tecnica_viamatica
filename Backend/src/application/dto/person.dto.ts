import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePersonDTO {
  @IsString()
  names!: string;

  @IsString()
  lastnames!: string;

  @IsString()
  identification?: string;

  @IsDate()
  borndate!: Date;
  @IsNumber()
  userId!: number;
}

export class UpdatePersonDTO {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsString()
  Identification?: string;
}
