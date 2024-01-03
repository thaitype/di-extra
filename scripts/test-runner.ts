/**
 * NOTE: I've stuck with setup Test Runner for legacy decorators on TypeScript with Jest, Mocha, and also ava,
 * If you have any idea, please open Pull Request or Issue, I'll be happy.
*/
import glob from 'tiny-glob';
import { execute } from './libs';

async function main() {
  console.log('Running tests...');
  const files = await glob('**/*.test.ts');

  for (const file of files) {
    console.log(`Running ${file}`);
    await execute('tsx', [file]);
  }
  console.log('Test completed');
}
main().catch(console.error);
