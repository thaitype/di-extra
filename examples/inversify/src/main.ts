import 'reflect-metadata';
import { DataService } from './services/data-service';
import { Service } from './services/service';
import { TOKENS } from './constants';
import { Option } from './types';
import { injector } from '@di-extra/inversify';
import { container } from './container';

injector(container)
  .inject('dataService', DataService).to<DataService>()
  .inject('service', Service).to<Service>()
  .inject('option', TOKENS.Option).to<Option>()
  .resolver(({ dataService, service, option }) => {
    // console.log(`service.getData()`, service.getData());
    // console.log(`dataService.getData()`, dataService.getData());
    // console.log(`option`, option);
  });