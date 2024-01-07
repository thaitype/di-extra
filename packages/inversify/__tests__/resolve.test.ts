import "reflect-metadata"
import { injector } from '../src/main';
import { PostService } from './helpers/post.service';
import { container } from "./helpers/container";

// ------------------------------------------------------------- 
// Arrange

// Act
const services = injector(container)
  .inject('postService', PostService).to<PostService>()
  .resolve();
// Assert
if (services.postService.getPost() !== 'Post: DataService') {
  throw new Error('Test failed');
}