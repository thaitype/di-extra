import { Container } from '@di-extra/inversify';
import { DataService } from './services/data-service';
import { Service } from './services/service';
import { TOKENS } from './constants';
import { Option } from './types';

export const container = new Container();
container.bind<DataService>(DataService).toSelf();
container.bind<Service>(Service).toSelf();

container
  .bind<Option>(TOKENS.Option)
  .toConstantValue({
    name: 'test-value',
  });