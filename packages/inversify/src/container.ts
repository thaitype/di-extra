import { Container as InversifyContainer, interfaces } from 'inversify';

export class Container {
  protected _container: InversifyContainer;

  constructor(container?: InversifyContainer) {
    this._container = container ?? new InversifyContainer();
  }

  /**
   * Bind a class to the container
   */
  bind<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>) {
    return this._container.bind<T>(serviceIdentifier);
  }

  /**
   * Resolve a class from the container
   */
  get<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>) {
    return this._container.get<T>(serviceIdentifier);
  }
}
