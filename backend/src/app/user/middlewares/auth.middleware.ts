import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';
import { ExpressRequestInterface } from '../types/expressRequest.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequestInterface, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      // todo: change to process.env.JWT_SECRET
      const decode = verify(token, 'secret-key');
      req.user = await this.userService.findById(decode.id);
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
