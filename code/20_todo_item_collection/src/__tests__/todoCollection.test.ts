import { TodoItem } from '../TodoItem.js';

describe('TodoItem', () => {
  let user: TodoItem;

  beforeEach(() => {
    user = new TodoItem(1, 'Task1');
  });

  test('should create a user', () => {
    expect(user.completed).toBe(false);
  });
});
