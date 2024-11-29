import { IsNumber, IsOptional } from "class-validator";
export class CreateRolUserDTO {
  @IsNumber()
  rol_idRol!: number;
  @IsNumber()
  user_idUser!: number;
}

export class UpdateRolUserDTO {
  @IsNumber()
  user_idUser!: number;
  @IsOptional()
  @IsNumber()
  rol_idRol!: number;
}
