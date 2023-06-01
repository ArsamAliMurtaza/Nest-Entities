import { Test, TestingModule } from '@nestjs/testing';
import { User8Controller } from './user8.controller';
import { User8Service } from './user8.service';

describe('User8Controller', () => {
  let controller: User8Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User8Controller],
      providers: [User8Service],
    }).compile();

    controller = module.get<User8Controller>(User8Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
