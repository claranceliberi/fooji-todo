import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @ManyToOne(() => Group, (group) => group.todos, {
    eager: true,
    nullable: true,
  })
  @ApiProperty({ type: () => Group, nullable: true })
  group: Group;
}
