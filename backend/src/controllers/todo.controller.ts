import { CreateTodoDto } from './../entities/dto/todo.dto';
import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { TodoService } from 'src/services/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(@Res() response, @Body() todo: CreateTodoDto) {
    const newTodo = await this.todoService.createTodo(todo);
    return response.status(HttpStatus.CREATED).json({
      newTodo,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const todos = await this.todoService.findAll();
    return response.status(HttpStatus.OK).json({
      todos,
    });
  }

  @Get('/:group-id')
  async fetchAllByGroup(@Res() response, @Param('gorup-id') groupId) {
    const todos = await this.todoService.findAllByGroup(groupId);
    return response.status(HttpStatus.OK).json({
      todos,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const todo = await this.todoService.findOne(id);
    return response.status(HttpStatus.OK).json({
      todo,
    });
  }
}
