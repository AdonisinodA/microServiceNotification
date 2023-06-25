import { Notification } from '../entities/notification';
//**********contrato ("interface" que diz quais metodos devem existir no repositorio)**********

// Ao declarar uma classe como abstrata usando a palavra-chave abstract,
//  você está indicando que essa classe não pode ser usada para criar objetos por si só.
//  Ela só pode ser usada como uma classe base para herança.
//  Uma classe abstrata pode conter métodos abstratos,
//  que são métodos que não possuem uma implementação definida na classe base.
//  Em vez disso, as classes derivadas devem fornecer sua própria implementação para esses métodos.

// A finalidade de uma classe abstrata é fornecer uma estrutura comum e definir
//  o comportamento mínimo que as classes derivadas devem ter.
//  Isso ajuda a garantir a consistência e a coerência entre as diferentes classes derivadas,
//  facilitando a manutenção e o desenvolvimento do código.
export abstract class NotificationsRepository {
  //classes abstratas servem apenas como modelo para outras classes

  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notificationId: Notification): Promise<void>;
}
