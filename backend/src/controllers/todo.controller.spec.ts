import { Group } from 'src/entities/group.entity';
import { Todo } from 'src/entities/todo.entity';
import { Test } from '@nestjs/testing';
import { GroupService } from 'src/services/group.service';
import { TodoService } from 'src/services/todo.service';
import { TodoController } from './todo.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'src/utils';

describe('Todo items controller', () => {
  let todoController: TodoController;
  let todoService: TodoService;
  let groupService: GroupService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        TodoService,
        GroupService,
        {
          provide: getRepositoryToken(Todo),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Group),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    todoController = module.get(TodoController);
    todoService = module.get(TodoService);
    groupService = module.get(GroupService);
  });

  describe('Module initiated', () => {
    it('should be defined', () => {
      expect(todoController).toBeDefined();
      expect(todoService).toBeDefined();
      expect(groupService).toBeDefined();
    });
  });

  describe('find All', () => {
    it('shoudl return an array of todos', async () => {
      const result = [
        {
          id: 1,
          name: 'test',
          group: null,
          created_on: new Date(),
          completed: false,
        },
      ];

      jest
        .spyOn(todoService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      const res = await todoController.fetchAll();
      expect(res).toBe(result);
    });
  });

  describe('find One', () => {
    it('shoudl return an one of todo item', async () => {
      const result = {
        id: 1,
        name: 'test',
        group: null,
        created_on: new Date(),
        completed: false,
      };

      jest
        .spyOn(todoService, 'findOne')
        .mockImplementation(() => Promise.resolve(result));

      const res = await todoController.findById(result.id);
      expect(res).toBe(result);
    });
  });

  describe('find One', () => {
    it('shoudl return an one of todo item', async () => {
      const result = {
        id: 1,
        name: 'test',
        group: null,
        created_on: new Date(),
        completed: false,
      };
      jest
        .spyOn(todoService, 'createTodo')
        .mockImplementation(() => Promise.resolve(result));

      const res = await todoController.createTodo({
        name: result.name,
        groupId: 0,
      });
      expect(res).toBe(result);
    });
  });
});
