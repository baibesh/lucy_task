import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { ProductEntity } from './product.entity';

@Crud({
  model: {
    type: ProductEntity,
  },
  dto: {
    create: CreateProductDto,
    update: UpdateProductDto,
  },
  query: {
    sort: [
      {
        field: 'id',
        order: 'DESC',
      },
    ],
    maxLimit: 20,
    cache: 60000,
    alwaysPaginate: true,
  },
  validation: {
    always: true,
  },
  routes: {
    createOneBase: {
      decorators: [ApiBearerAuth('access-token'), UseGuards(AuthGuard)],
    },
    createManyBase: {
      decorators: [ApiBearerAuth('access-token'), UseGuards(AuthGuard)],
    },
    updateOneBase: {
      decorators: [ApiBearerAuth('access-token'), UseGuards(AuthGuard)],
    },
  },
})
@Controller('product')
@ApiTags('Product')
export class ProductController implements CrudController<ProductEntity> {
  constructor(public service: ProductService) {}
}
