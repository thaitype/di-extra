import { inject, injectable } from 'inversify';
import { DataService } from './data-service';

@injectable()
export class Service {
  constructor(@inject(DataService) private dataService: DataService) {}

  public getData() {
    return `Getting data from ${this.dataService.getData()}`;
  }
}
