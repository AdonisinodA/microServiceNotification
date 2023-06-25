import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRespository } from './prisma/repositories/prisma-notification-repository';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRespository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
