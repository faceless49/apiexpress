import express, { Express } from 'express';
import { ExeptionFilter } from './error/exeption.filter';
import { UserController } from './users/users.controller';
import { LoggerService } from './logger/logger.service';
import { Server } from 'http';

export class App {
  app: Express;
  server: Server;
  port: number;
  logger: LoggerService;
  userController: UserController;
  exeptionFilter: ExeptionFilter;

  constructor(logger: LoggerService, userController: UserController, exeptionFilter: ExeptionFilter) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;

  }

  useRoutes() {
    this.app.use('/users', this.userController.router);
  }

  useExeptionFilters() {
    this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
  }

  public async init() {
    this.useRoutes();
    this.useExeptionFilters();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
  }
}