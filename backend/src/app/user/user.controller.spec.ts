import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';

describe('UserController', () => {
  let controller: UserController;

  const mockUserService = {
    login: jest.fn((dto: LoginDto) => {
      return {
        token: expect.any(String),
        email: dto.email,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should login user', async function () {
    const loginDto: LoginDto = { email: 'admin@gmail.com', password: '123' };

    expect(await controller.login(loginDto)).toEqual({
      token: expect.any(String),
      email: loginDto.email,
    });

    // expect(mockUserService.login(loginDto)).toHaveBeenCalledWith(loginDto);
  });
});
