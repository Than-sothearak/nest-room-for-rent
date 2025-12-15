import { IsString, IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isAdmin!: boolean;
}
