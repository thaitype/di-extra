import { Container } from 'inversify';
import { DataService } from './data.service';
import { PostService } from './post.service';

export const container = new Container();
container.bind<DataService>(DataService).toSelf();
container.bind<PostService>(PostService).toSelf();