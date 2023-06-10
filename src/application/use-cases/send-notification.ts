import { Content } from '../entities/content';
import { Injectable } from '@nestjs/common/decorators';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import 'reflect-metadata';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface SendNotificationResponse {
  notification: Notification;
}
@Injectable()
export class SendNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

    await this.notificationsRepository.create(notification);
    return { notification };
  }
}
