import { Group } from 'src/entities/group.entity';
import { TodoController } from './../controllers/todo.controller';
import { TodoService } from '../services/todo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Group])],
  providers: [TodoService],
  controllers: [TodoController],
  exports: [TodoService],
})
export class TodoModule {}
