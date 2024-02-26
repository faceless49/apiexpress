import { IExeptionFilter } from './error/exeption.filter.interface';
import { ILogger } from './logger/logger.interface';
import { TYPES } from './types';
import { ExeptionFilter } from './error/exeption.filter';
import { UserController } from './users/users.controller';
import { LoggerService } from './logger/logger.service';
import { App } from './app';
import { Container } from 'inversify';

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<App>(TYPES.Application).to(App);
const app = appContainer.get<App>(TYPES.Application);
app.init();
export { app, appContainer };