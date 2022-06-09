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
  HttpCode,
  Put,
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
  async createTodo(@Body() todo: CreateTodoDto) {
    return await this.todoService.createTodo(todo);
  }

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: Todo,
    description: 'All Todo items has been successfully retrieved.',
  })
  @ApiOperation({ summary: 'Get All todo items' })
  async fetchAll() {
    return await this.todoService.findAll();
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
  async fetchAllByGroup(@Param('groupId') groupId) {
    return await this.todoService.findAllByGroup(groupId);
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
  async findById(@Param('id') id) {
    return await this.todoService.findOne(id);
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
  async delete(@Param('id') id) {
    return await this.todoService.deleteTodo(id);
  }

  @Put('/:id')
  @ApiOkResponse({
    type: Todo,
    description: 'Todo item complete status has been successfully changed ',
  })
  @ApiOperation({ summary: 'Toggle todo item by its id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    example: 1,
    description: 'id of todo item',
  })
  async toggleTodo(@Param('id') id) {
    return await this.todoService.toggleTodo(id);
  }
}
