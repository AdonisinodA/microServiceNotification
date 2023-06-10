//contrato (interface que diz quais metodos devem existir no repositorio)

import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  //classes abstratas servem apenas como modelo para outras classes

  abstract create(notification: Notification): Promise<void>;
}
