import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { SendNotification } from '../../application/use-cases/send-notification';
import { NotificationsRepository } from '../../application/repositories/notifications-repository';
import { PrismaNotificationRespository } from '../database/prisma/repositories/prisma-notification-repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}
