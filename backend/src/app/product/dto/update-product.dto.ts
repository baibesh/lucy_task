import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @IsNotEmpty()
  @Length(4)
  @ApiProperty()
  name: string;
}
