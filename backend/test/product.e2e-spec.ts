import { Test, TestingModule } from '@nestjs/testing';
import { ProductModule } from '../src/app/product/product.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductEntity } from '../src/app/product/product.entity';

describe('Product Controller (e2e)', () => {
  let app: INestApplication;
  const mockProductRepository = {};

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProductModule],
    })
      .overrideProvider(getRepositoryToken(ProductEntity))
      .useValue(mockProductRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/product (CREATE)', async function () {
    const response = await request(app.getHttpServer())
      .post('/product')
      .send({ name: 'Product Name ' });

    expect(response.status).toEqual(200);
  });
});
