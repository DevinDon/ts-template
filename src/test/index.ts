import { hello } from '../main/Hello';

describe('hello world', () => {

  it('should say hello', done => {
    expect(hello('world')).toBe('Hello, world!');
    done();
  });

});
