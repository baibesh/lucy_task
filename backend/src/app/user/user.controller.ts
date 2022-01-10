import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponseInterface } from './types/loginResponse.interface';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })
  @UsePipes(new ValidationPipe())
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseInterface> {
    return await this.userService.login(loginDto);
  }
}
