import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo.entity';

@Entity('group')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Todo, (todo) => todo.group)
  todos: Todo[];
}
