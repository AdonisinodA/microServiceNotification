import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationRespository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { category, content, readAt, recipientId, id } = notification;
    await this.prismaService.notification.create({
      data: {
        id,
        category,
        content: content.value,
        readAt,
        recipientId,
      },
    });
  }
}
