import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UserEntity } from './user.entity';
import { LoginDto } from './dto/login.dto';
import { LoginResponseInterface } from './types/loginResponse.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  generateJWT(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        email: user.email,
      },
      // todo: change to process.env.JWT_SECRET
      'secret-key',
    );
  }

  async login(loginDto: LoginDto): Promise<LoginResponseInterface> {
    const user = await this.userRepository.findOne(
      {
        email: loginDto.email,
      },
      {
        select: ['id', 'email', 'password'],
      },
    );
    if (!user) throw new NotFoundException('User not found');
    const isPasswordCorrect = await compare(loginDto.password, user.password);
    if (!isPasswordCorrect)
      throw new HttpException(
        'Credential are not valid',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    delete user.password;

    return {
      token: this.generateJWT(user),
      email: user.email,
    };
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne(id);
  }
}
