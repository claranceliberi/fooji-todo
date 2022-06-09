import { MockType } from 'src/types';
import { Repository } from 'typeorm';

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    findOne: jest.fn((entity) => entity),
    findAll: jest.fn((entity) => entity),
    // ...
  }),
);
