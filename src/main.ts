import { ExeptionFilter } from './error/exeption.filter';
import { UserController } from './users/users.controller';
import { LoggerService } from './logger/logger.service';
import { App } from './app';

async function bootstrap() {
  const logger = new LoggerService()
  const app = new App(logger,new UserController(logger), new ExeptionFilter(logger));
  await app.init();
}

bootstrap();