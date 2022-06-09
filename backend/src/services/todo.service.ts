import { Group } from './../entities/group.entity';
import { CreateTodoDto } from './../entities/dto/todo.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { DeleteResult, IsNull, Not, Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find({ order: { created_on: 'ASC' } });
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne({ where: { id: id } });
  }

  findAllByGroup(groupdId: number): Promise<Todo[]> {
    if (groupdId == 0) {
      return this.todoRepository
        .createQueryBuilder('todo')
        .where('todo.groupId IS NULL')
        .orderBy('todo.created_on', 'ASC')
        .getMany();
    }
    return this.todoRepository.find({
      where: { group: { id: groupdId } },
      order: { created_on: 'ASC' },
    });
  }

  async createTodo(_todoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.name = _todoDto.name;
    todo.completed = false;

    if (_todoDto.groupId && _todoDto.groupId != 0) {
      todo.group = await this.groupRepository.findOne({
        where: { id: _todoDto.groupId },
      });
    }

    return this.todoRepository.save(todo);
  }

  async toggleTodo(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id: id } });
    todo.completed = !todo.completed;
    return this.todoRepository.save(todo);
  }

  deleteTodo(id: number): Promise<DeleteResult> {
    return this.todoRepository.delete({ id });
  }
}
