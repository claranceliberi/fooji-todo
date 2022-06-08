import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { Todo } from 'src/entities/todo.entity';
import { TodoService } from 'src/services/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createBook(@Res() response, @Body() book: Todo) {
    const newTodo = await this.todoService.createBook(book);
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

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const todo = await this.todoService.findOne(id);
    return response.status(HttpStatus.OK).json({
      todo,
    });
  }
}
