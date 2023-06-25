import { Notification } from '@application/entities/notification';

export class NotificationMapperController {
  static viewNotificationHttp(notification: Notification) {
    return {
      category: notification.category,
      content: notification.content,
      id: notification.id,
    };
  }
}
