// https://github.com/avajs/ava/issues/1475

// import { expect, test } from '@jest/globals';
import test from 'ava';
// import { assert } from "chai";
// import { Container } from 'inversify';
// import { injector } from '../src/main';
// import { DataService } from './helpers/data.service';
// import { PostService } from './helpers/post.service';

// // ------------------------------------------------------------- 
// // Setup services on the container
// const container = new Container();
// container.bind<DataService>(DataService).toSelf();
// container.bind<PostService>(PostService).toSelf();
// injector(container)
//     .inject('dataService', DataService).to<DataService>()
//     .resolve(({ dataService }) => dataService.getData());

test('test sum', (t) => {
    // Arrange
    // const container = new Container();
    // container.bind<DataService>(DataService).toSelf();
    // container.bind<PostService>(PostService).toSelf();
    // // Act
    // const result = injector(container)
    //     .inject('dataService', DataService).to<DataService>()
    //     .resolve(({ dataService }) => dataService.getData());
    // // Assert
    // console.log(result);
    // expect(result).toBe('Post: DataService2');
    t.is(1, 1);
});



// describe("User Service Tests", () => {
//    it("Test", async () => {

//      // assert that the user id is 1
//      assert.equal(1, 2);
//   });
// });