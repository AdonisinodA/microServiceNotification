export class NotificationNotFounder extends Error {
  constructor() {
    super('Notificação não foi encontrada');
  }
}
