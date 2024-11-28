import { IsNumber, IsString } from "class-validator";

export class CreateUserDTO {
  @IsString()
  username!: string;
  @IsString()
  password!: string;
  @IsString()
  mail!: string;
  @IsString()
  sessionActive!: string;
  @IsNumber()
  roleId!: number;
  @IsString()
  status!: "active" | "blocked";
}

export class UpdateUserDTO {
  @IsString()
  username?: string;
  @IsString()
  email?: string;
  @IsString()
  password?: string;
  @IsString()
  status?: "active" | "blocked";
}
