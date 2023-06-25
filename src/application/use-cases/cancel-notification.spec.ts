import { randomUUID } from 'node:crypto';
import { SendNotification } from './send-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memorie-notification';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFounder } from './errors/notification-notFounder-error';

describe('cancel Notification', () => {
  test('deve cancelar a notificação', async () => {
    const inMemoryRepo = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(inMemoryRepo);
    const notification = new Notification({
      content: new Content('Isso é uma notificação'),
      category: 'social',
      recipientId: randomUUID(),
    });
    await inMemoryRepo.create(notification);
    await cancelNotification.execute({ notificationId: notification.id });

    expect(inMemoryRepo.notifications).toHaveLength(1);
    expect(
      inMemoryRepo.notifications[inMemoryRepo.notifications.length - 1]
        .cancelAt,
    ).toEqual(expect.any(Date));
  });

  it('se a notificao der erro', async () => {
    const inMemoryRepo = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(inMemoryRepo);
    expect(() => {
      return cancelNotification.execute({ notificationId: 'notification.id' });
    }).rejects.toThrow(NotificationNotFounder);
  });
});
