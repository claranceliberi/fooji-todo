import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find({});
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne({
      where: [{ id }],
    });
  }

  findAllByGroup(groupdId: number): Promise<Todo[]> {
    return this.todoRepository.find({ where: { group: { id: groupdId } } });
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }
  deleteTodo(id: number): Promise<DeleteResult> {
    return this.todoRepository.delete({ id });
  }
}
