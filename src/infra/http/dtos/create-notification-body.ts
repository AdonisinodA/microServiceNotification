import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'recipientId' })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty({ message: 'content ' })
  @Length(5, 240)
  content: string;

  @IsNotEmpty({ message: 'category' })
  category: string;
}
