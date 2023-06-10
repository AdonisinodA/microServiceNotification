import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepository } from '../../application/repositories/notifications-repository';
import { PrismaNotificationRespository } from './prisma/repositories/prisma-notification-repository';

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
