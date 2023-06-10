import { randomUUID } from 'node:crypto';
import { SendNotification } from './send-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memorie-notification';

describe('Send Notification', () => {
  test('deve criar notificação', async () => {
    const inMemoryRepo = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(inMemoryRepo);
    const { notification } = await sendNotification.execute({
      content: 'Isso é uma notificação',
      category: 'social',
      recipientId: randomUUID(),
    });

    expect(inMemoryRepo.notifications).toHaveLength(1);
    expect(
      inMemoryRepo.notifications[inMemoryRepo.notifications.length - 1],
    ).toEqual(notification);
  });
});
