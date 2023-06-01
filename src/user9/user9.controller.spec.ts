import { Test, TestingModule } from '@nestjs/testing';
import { User9Controller } from './user9.controller';
import { User9Service } from './user9.service';

describe('User9Controller', () => {
  let controller: User9Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User9Controller],
      providers: [User9Service],
    }).compile();

    controller = module.get<User9Controller>(User9Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
