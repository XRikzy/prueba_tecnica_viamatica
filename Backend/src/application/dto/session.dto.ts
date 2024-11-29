import { IsDate, IsNumber, IsOptional } from "class-validator";

export class CreateSessionDTO {
  @IsDate()
  entryDate!: string;
  @IsDate()
  closeDate!: string;
  @IsNumber()
  user_idUser!: number;
}

export class UpdateSessionDTO {
  @IsDate()
  entryDate!: string;
  @IsOptional()
  @IsDate()
  closeDate?: string;
}
