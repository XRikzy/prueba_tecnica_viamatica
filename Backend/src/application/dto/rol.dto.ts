import { IsNumber, IsString } from "class-validator";

export class CreateRolDTO {
  @IsString()
  rolName!: string;
}

export class UpdateRolDTO {
  @IsString()
  rolName?: string;
}
