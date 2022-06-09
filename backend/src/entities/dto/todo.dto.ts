import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ nullable: false })
  name: string;

  @ApiProperty({ nullable: true })
  groupId?: number;
}
