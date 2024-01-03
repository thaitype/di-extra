import { inject, injectable } from 'inversify';
import { DataService } from './data.service';

@injectable()
export class PostService {
  constructor(@inject(DataService) private dataService: DataService) {}

  public getPost() {
    return `Post: ${this.dataService.getData()}`;
  }
}
