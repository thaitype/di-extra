import { interfaces, Container } from 'inversify';
type InversifyProviderFunc<T extends Record<string, unknown>, TReturn> = (services: T) => TReturn;

// eslint-disable-next-line @typescript-eslint/ban-types
class InversifyProvider<Items extends Record<string, interfaces.ServiceIdentifier<unknown>> = {}> {
  items: Items = {} as Items;

  constructor(private readonly container: Container) {}

  inject<OutputType, Name extends string>(name: Name, identifier: interfaces.ServiceIdentifier<OutputType>) {
    this.items = {
      ...this.items,
      [name]: identifier,
    };
    return new Injection<OutputType, Name, Items>(this, name);
  }

  resolver<TReturn>(func: InversifyProviderFunc<Items, TReturn>): TReturn {
    const services: Record<string, unknown> = {};
    Object.keys(this.items).forEach(key => {
      services[key] = this.container.get(this.items[key]);
    });
    return func(services as Items & Record<string, unknown>);
  }

  resolve(): Items {
    const services: Record<string, unknown> = {};
    Object.keys(this.items).forEach(key => {
      services[key] = this.container.get(this.items[key]);
    });
    return services as Items;
  }
}

class Injection<
  ToOutputType,
  Name extends string,
  Items extends Record<string, interfaces.ServiceIdentifier<unknown>>
> {
  constructor(private readonly provider: InversifyProvider<Items>, private readonly name: Name) {}

  to<OutputType extends ToOutputType>() {
    return this.provider as unknown as InversifyProvider<Items & Record<Name, OutputType>>;
  }
}

export function injector(container: Container) {
  return new InversifyProvider(container);
}