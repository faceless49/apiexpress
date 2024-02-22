import { ILogger } from './logger.interface';
import { Logger } from 'tslog';

export class LoggerService implements ILogger {
  public logger: Logger<any>;

  constructor() {
    this.logger = new Logger({});
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  error(...args: unknown[]) {
    // отправка в sentry / rollbar
    this.logger.error(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}