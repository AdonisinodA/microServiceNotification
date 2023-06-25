import { Injectable } from '@nestjs/common/decorators';
import { NotificationsRepository } from '../repositories/notifications-repository';
import 'reflect-metadata';
import { NotificationNotFounder } from './errors/notification-notFounder-error';

interface cancelRequest {
  notificationId: string;
}
type cancelResponse = void;

@Injectable()
export class CancelNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(request: cancelRequest): Promise<cancelResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );
    if (!notification) throw new NotificationNotFounder();

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
