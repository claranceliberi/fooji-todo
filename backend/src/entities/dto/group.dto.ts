import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({ nullable: false })
  name: string;
}
