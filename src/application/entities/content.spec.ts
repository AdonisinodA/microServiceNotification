import { Content } from './content';

describe('Notification Content', () => {
  test('deve ser possível criar o conteúdo da notificação', () => {
    const content = new Content(
      'Deve existir mais de 5 caracteres e menos que 255 ',
    );

    expect(content).toBeTruthy(); // verificar se o contéudo é verdadeiro, sem strick mode
  });

  test('Não deve ser possível criar um content com menos de 5 caracteres', () => {
    expect(() => new Content('FA')).toThrow(); // expectativa de retornar throw
  });

  test('Não deve conter mais que 240 carateres', () => {
    expect(() => new Content('a'.repeat(250))).toThrow();
  });
});
