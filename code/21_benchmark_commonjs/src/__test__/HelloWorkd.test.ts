import { HelloWorld } from "../HelloWorld";

describe('Test', () => {
  let user: HelloWorld;

  beforeEach(() => {
    user = new HelloWorld('USER');
  });

  test('should create a user', () => {
    expect(user.hello()).toBe('Hello USER!');  
  });
});
