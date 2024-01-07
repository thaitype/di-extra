import "reflect-metadata"
import { expect, test } from 'vitest'
import { injector } from '../src/main';
import { container } from './helpers/container';
import { PostService } from './helpers/post.service';

test('resolve', async () => {
  const services = injector(container)
    .inject('postService', PostService).to<PostService>()
    .resolve();

  expect(services.postService.getPost()).toBe("Post: DataService")
})

test('resolve with resolver', async () => {
  const result = injector(container)
    .inject('postService', PostService).to<PostService>()
    .resolver(({ postService }) => postService.getPost());

  expect(result).toBe("Post: DataService");
});