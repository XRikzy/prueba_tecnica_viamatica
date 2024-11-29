import { IsNumber, IsOptional } from "class-validator";
export class CreateRolRolOptionDTO {
  @IsNumber()
  Rol_idRol!: number;
  @IsNumber()
  RolOption_idOption!: number;
}

export class UpdateRolRolOptionDTO {
  @IsNumber()
  Rol_idRol!: number;
  @IsOptional()
  @IsNumber()
  RolOption_idOption!: number;
}
