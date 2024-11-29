import { IsNumber, IsOptional } from "class-validator";
export class CreateRolUserDTO {
  @IsNumber()
  id!: number;
  @IsNumber()
  user_idUser!: number;
  @IsNumber()
  rol_id!: number
}

export class UpdateRolUserDTO {
  @IsNumber()
  user_idUser!: number;
  @IsOptional()
  @IsNumber()
  rol_idRol!: number;
}
