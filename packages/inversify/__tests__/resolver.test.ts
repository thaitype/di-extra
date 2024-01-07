import "reflect-metadata"
import { injector } from '../src/main';
import { PostService } from './helpers/post.service';
import { container } from "./helpers/container";

// Act
const result = injector(container)
  .inject('postService', PostService).to<PostService>()
  .resolver(({ postService }) => postService.getPost());
// Assert
if (result !== 'Post: DataService') {
  throw new Error('Test failed');
}