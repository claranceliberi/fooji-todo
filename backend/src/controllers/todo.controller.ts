import { Todo } from 'src/entities/todo.entity';
import { CreateTodoDto } from './../entities/dto/todo.dto';
import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from 'src/services/todo.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiCreatedResponse({
    type: Todo,
    description: 'Todo item has been successfully created.',
  })
  @ApiOperation({ summary: 'create todo item' })
  async createTodo(@Res() response, @Body() todo: CreateTodoDto) {
    const newTodo = await this.todoService.createTodo(todo);
    return response.status(HttpStatus.CREATED).json({
      newTodo,
    });
  }

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: Todo,
    description: 'All Todo items has been successfully retrieved.',
  })
  @ApiOperation({ summary: 'Get All todo items' })
  async fetchAll(@Res() response) {
    const todos = await this.todoService.findAll();
    return response.status(HttpStatus.OK).json(todos);
  }

  @Get('/group/:groupId')
  @ApiOkResponse({
    description: 'Todo item has been successfully retrieved by group id.',
    isArray: true,
    type: Todo,
  })
  @ApiOperation({ summary: 'Get All todo items that belongs to certain group' })
  @ApiParam({
    name: 'groupId',
    type: 'number',
    example: 1,
    description: 'id of group',
  })
  async fetchAllByGroup(@Res() response, @Param('groupId') groupId) {
    const todos = await this.todoService.findAllByGroup(groupId);
    return response.status(HttpStatus.OK).json(todos);
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    type: 'number',
    example: 1,
    description: 'id of todo item',
  })
  @ApiOkResponse({
    type: Todo,
    description: 'Todo item has been successfully retrieved by todo id.',
  })
  @ApiOperation({ summary: 'Get todo item by its id' })
  async findById(@Res() response, @Param('id') id) {
    const todo = await this.todoService.findOne(id);
    return response.status(HttpStatus.OK).json(todo);
  }

  @Delete('/:id')
  @ApiOkResponse({
    type: Todo,
    description: 'Todo item has been successfully deleted ',
  })
  @ApiOperation({ summary: 'Delete todo item by its id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    example: 1,
    description: 'id of todo item',
  })
  async delete(@Res() response, @Param('id') id) {
    const todo = await this.todoService.deleteTodo(id);
    return response.status(HttpStatus.OK).json(todo);
  }
}
