import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from './group.entity';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @CreateDateColumn()
  @ApiProperty()
  created_on: Date;

  @Column({ default: false })
  @ApiProperty()
  completed: boolean;

  @ManyToOne(() => Group, (group) => group.todos, {
    eager: true,
    nullable: true,
  })
  @ApiProperty({ type: () => Group, nullable: true })
  group: Group;
}
