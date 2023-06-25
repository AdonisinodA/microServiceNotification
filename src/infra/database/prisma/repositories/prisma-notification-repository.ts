import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationRespository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }
  async save(notificationId: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
  // async findById(notificationId: string): Promise<Notification | null> {
  //   const notification = await this.prismaService.notification.findUnique({
  //     where: {
  //       id: notificationId,
  //     },
  //   });
  //   notification && new Notification(notification);

  // }

  // async save(notification: Notification): Promise<void> {
  //   const raw = PrismaNotificationMapper.toPrisma(notification);
  //   await this.prismaService.notification.update({
  //     where: { id: raw.id },
  //     data: raw,
  //   });
  // }
}
