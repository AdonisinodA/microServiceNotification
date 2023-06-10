import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: any = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}