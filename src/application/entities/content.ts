//value object, exportar como classe para validação e tipo de um dado

export class Content {
  private readonly content: string;

  constructor(content: string) {
    this.content = content;
    const validate = this.ValidateContent(this.content);
    if (!validate) throw new Error('content large or small to recommend');
  }

  private ValidateContent(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get value(): string {
    return this.content;
  }
}
