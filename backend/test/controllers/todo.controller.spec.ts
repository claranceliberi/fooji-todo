import { Test } from '@nestjs/testing';
import { GroupService } from 'src/services/group.service';
import { TodoService } from 'src/services/todo.service';
import { TodoController } from './../../src/controllers/todo.controller';
import mocks from 'node-mocks-http';

describe('Todo items controller', () => {
  let todoController: TodoController;
  let todoService: TodoService;
  let groupService: GroupService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService, GroupService],
    }).compile();

    todoController = module.get(TodoController);
    todoService = module.get(TodoService);
    groupService = module.get(GroupService);
  });

  describe('find All', () => {
    it('shoudl return an array of todos', async () => {
      const result = [{ id: 1, name: 'test', group: null }];

      jest
        .spyOn(todoService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      const Res = mocks.createResponse();
      expect(await todoController.fetchAll(Res)).toBe(result);
    });
  });
});
