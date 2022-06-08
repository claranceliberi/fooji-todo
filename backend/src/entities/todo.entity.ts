import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Group, (group) => group.todos, {
    eager: true,
    nullable: true,
  })
  group: Group;
}
