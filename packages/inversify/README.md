# @di-extra/inversify

Type-safe Dependency Injection Wrapper for inversify

## Getting Started

### Install dependencies

```bash
npm install @di-extra/inversify
```

### Usage

See [full example in example/inversify](https://github.com/thaitype/di-extra/tree/main/examples/inversify)

```typescript
import { container } from './container';
import { injector } from '@di-extra/inversify';
import 'reflect-metadata';
import { DataService } from './services/data';
import { Service } from './services/service';
import { Tokens } from './constants';
import { Option } from './types';
import { injector } from '@di-extra/inversify';

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