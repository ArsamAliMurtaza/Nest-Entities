import { Test, TestingModule } from '@nestjs/testing';
import { User9Service } from './user9.service';

describe('User9Service', () => {
  let service: User9Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User9Service],
    }).compile();

    service = module.get<User9Service>(User9Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
