import "reflect-metadata"
import { Container } from 'inversify';
import { injector } from '../src/main';
import { DataService } from './helpers/data.service';
import { PostService } from './helpers/post.service';

// ------------------------------------------------------------- 
// Arrange
const container = new Container();
container.bind<DataService>(DataService).toSelf();
container.bind<PostService>(PostService).toSelf();

// Act
const result = injector(container)
  .inject('postService', PostService).to<PostService>()
  .resolve(({ postService }) => postService.getPost());
// Assert
if (result !== 'Post: DataService') {
  throw new Error('Test failed');
}