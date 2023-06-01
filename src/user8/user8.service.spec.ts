import { Test, TestingModule } from '@nestjs/testing';
import { User8Service } from './user8.service';

describe('User8Service', () => {
  let service: User8Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User8Service],
    }).compile();

    service = module.get<User8Service>(User8Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
