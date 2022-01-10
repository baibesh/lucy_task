import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as request from 'supertest';
import { UserModule } from '../src/app/user/user.module';
import { UserEntity } from '../src/app/user/user.entity';

describe('User Controller (e2e)', () => {
  let app: INestApplication;
  const mockProductRepository = {
    login: jest.fn((dto: { email: string; password: string }) => {
      return {
        token: expect.any(String),
        email: dto.email,
      };
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(getRepositoryToken(UserEntity))
      .useValue(mockProductRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user/login (CREATE)', async function () {
    const response = await request(app.getHttpServer())
      .post('/user/login')
      .send({ email: 'admin@gmail.com', password: '123' });
  });
});
