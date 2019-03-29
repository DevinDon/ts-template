import { hello, asyncHello } from '../main/hello';

describe('Hello, world!', () => {

  it('should say `Hello, world!`', done => {
    expect(hello('world')).toEqual('Hello, world!');
    done();
  });

  it('should async say `Hello, world!`', done => {
    expectAsync(asyncHello('world')).toBeResolvedTo('Hello, world!');
    done();
  });

});
