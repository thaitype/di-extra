# di-extra

Type-safe Dependency Injection Extra helper functions (Most decorator based)

[![CI](https://github.com/thaitype/di-extra/actions/workflows/main.yml/badge.svg)](https://github.com/thaitype/di-extra/actions/workflows/main.yml)


| Package                                   | npm                                                                                                                   | Description                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [@di-extra/inversify](packages/inversify) | [![npm version](https://img.shields.io/npm/v/@di-extra/inversify)](https://www.npmjs.com/package/@di-extra/inversify) | Type-safe Dependency Injection Wrapper for [inversify][inversify] |

> May be support most popluar DI container in future release, e.g. tsyringe

### Motivation

When working with Dependency Injection (DI) in TypeScript, maintaining type safety becomes a crucial concern, especially when relying on decorator-based approaches. The decorator-based DI, as demonstrated below, introduces challenges in achieving optimal type safety:

```typescript
import { inject, injectable } from 'inversify';
// Import all related dependencies services

@injectable()
class MyController {
  constructor(
    @inject(Service) private service: Service,
    @inject(DataService) private dataService: DataService,
    @inject(Tokens.Option) private option: Option
  ) {
    console.log(`service.getData()`, this.service.getData());
    console.log(`dataService.getData()`, this.dataService.getData());
    console.log(`option`, this.option);
  }
}
```

In contrast, the `di-extra` library addresses this concern by providing a more straightforward and type-safe alternative. 
The motivation behind using `di-extra` is to enhance type safety in the context of Dependency Injection, making the codebase more robust and maintainable. The example below illustrates how `di-extra` simplifies DI configuration while ensuring type safety:

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

By opting for `di-extra`, developers can achieve a more maintainable and type-safe DI configuration, enhancing the overall reliability of their TypeScript projects. For a complete example, refer to the [example/inversify](https://github.com/thaitype/di-extra/tree/main/examples/inversify)

## Installation

For specific installation instructions, refer to the `README.md` files in the respective packages' subdirectories. Each subdirectory contains detailed information on how to install and set up the `di-extra` library for the chosen Dependency Injection (DI) container.

Choose the appropriate package based on your preferred DI container, and follow the instructions provided in the corresponding `README.md` for a seamless installation experience.

## Usage
Follow these steps to use di-extra in your project:

1. Install the appropriate package for your DI container, e.g., `@di-extra/inversify`.
2. Import the necessary modules and set up your DI container.
3. Use the `injector` function to configure and resolve your dependencies in a clean and type-safe manner.

The documentation for the `di-extra` library does not cover the fundamentals of Dependency Injection (DI) usage. To effectively utilize the DI features provided by this library, it is crucial to refer to the original documentation of the specific DI container packages.

Please consult the original documentation of the respective packages, such as [Inversify]([Inversify][inversify]), to gain a comprehensive understanding of how to use Dependency Injection in your TypeScript projects. The `di-extra` documentation primarily focuses on the additional functionalities and improvements it brings to the DI experience, assuming a foundational knowledge of DI principles.

Be sure to review the documentation of the underlying DI container used in conjunction with `di-extra` for a complete guide on DI configuration, best practices, and usage specifics.

## Contributing
If you want to contribute to this project, feel free to open issues or submit pull requests. Your contributions are highly appreciated!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


[inversify]: https://github.com/inversify/InversifyJS
