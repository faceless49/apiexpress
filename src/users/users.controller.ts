import { NextFunction, Request, Response } from 'express';
import { IUserController } from '../users/users.controller.interface';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { HTTPError } from '../error/http-error.class';
import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { injectable, inject } from 'inversify';

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService);
    this.bindRoutes([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'post', func: this.login },
    ])
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'Ошибка авторизации', 'login'))
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register');
  }
}