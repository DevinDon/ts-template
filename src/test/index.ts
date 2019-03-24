import { hello } from '../main';

describe('hello world', () => {

  it('should say hello', done => {
    expect(hello('world')).toBe('Hello, world!');
    done();
  });

});
