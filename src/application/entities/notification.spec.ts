import { Content } from './content';
import { Notification } from './notification';
import { randomUUID } from 'node:crypto';

describe('Notification', () => {
  test('deve ser possível criar notificação', () => {
    const notification = new Notification({
      content: new Content('New solicitation'),
      category: 'test',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
