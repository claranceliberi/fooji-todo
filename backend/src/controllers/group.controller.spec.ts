import { Group } from 'src/entities/group.entity';
import { Test } from '@nestjs/testing';
import { GroupService } from 'src/services/group.service';
import { GroupController } from './group.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'src/utils';

describe('Group Group controller', () => {
  let groupController: GroupController;
  let groupService: GroupService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [GroupController],
      providers: [
        GroupService,
        {
          provide: getRepositoryToken(Group),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    groupController = module.get(GroupController);
    groupService = module.get(GroupService);
  });

  describe('Module initiated', () => {
    it('should be defined', () => {
      expect(groupController).toBeDefined();
      expect(groupService).toBeDefined();
      expect(groupService).toBeDefined();
    });
  });

  describe('find All', () => {
    it('shoudl return an array of groups', async () => {
      const result = [{ id: 1, name: 'test', todos: [] }];

      jest
        .spyOn(groupService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      const res = await groupController.fetchAll();
      expect(res).toBe(result);
    });
  });

  describe('find One', () => {
    it('shoudl return an one of group item', async () => {
      const result = { id: 1, name: 'test', todos: [] };

      jest
        .spyOn(groupService, 'findOne')
        .mockImplementation(() => Promise.resolve(result));

      const res = await groupController.findById(result.id);
      expect(res).toBe(result);
    });
  });

  describe('find One', () => {
    it('shoudl return an one of group item', async () => {
      const result = { id: 1, name: 'test item', todos: [] };

      jest
        .spyOn(groupService, 'createGroup')
        .mockImplementation(() => Promise.resolve(result));

      const res = await groupController.createGroup({
        name: result.name,
      });
      expect(res).toBe(result);
    });
  });
});
