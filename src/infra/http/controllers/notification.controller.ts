import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationMapperController } from '../mappers/notification-mapper-controller';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly sendNotification: SendNotification) {}

  @Post()
  async create(
    @Body() { content, category, recipientId }: CreateNotificationBody,
  ) {
    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
    const raw = NotificationMapperController.viewNotificationHttp(notification);
    return raw;
  }
}

