# @di-extra/inversify

Type-safe Dependency Injection Wrapper for [inversify](https://github.com/inversify/InversifyJS)

> Currently, support inversify v6 

## Getting Started

### Install dependencies

```bash
npm install @di-extra/inversify
```

### Usage

See [full example in example/inversify](https://github.com/thaitype/di-extra/tree/main/examples/inversify)

```typescript
import 'reflect-metadata';
import { container } from './container';
import { injector } from '@di-extra/inversify';
// Import all related dependencies services

injector(container)
  .inject('dataService', DataService).to<DataService>()
  .inject('service', Service).to<Service>()
  .inject('option', Tokens.Option).to<Option>()
  .resolve(({ dataService, service, option }) => {
      console.log(`service.getData()`, service.getData());
      console.log(`dataService.getData()`, dataService.getData());
      console.log(`option`, option);
  });
```

Output:

```
service.getData() Getting data from Hey I'm DataService
dataService.getData() Hey I'm DataService
option { name: 'test-value' }
```