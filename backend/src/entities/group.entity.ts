import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo.entity';

@Entity('group')
export class Group {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @OneToMany(() => Todo, (todo) => todo.group)
  @ApiProperty({ type: () => Todo, isArray: true })
  todos: Todo[];
}
