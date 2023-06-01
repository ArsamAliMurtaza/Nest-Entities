import { Test, TestingModule } from '@nestjs/testing';
import { User2AdminController } from './user2-admin.controller';

describe('User2AdminController', () => {
  let controller: User2AdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User2AdminController],
    }).compile();

    controller = module.get<User2AdminController>(User2AdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
