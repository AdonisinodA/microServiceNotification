import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

//documentação https://docs.nestjs.com/microservices/kafka
//implementar futuramente

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['stirred-bream-9626-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'iduser',
          password: 'password',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
