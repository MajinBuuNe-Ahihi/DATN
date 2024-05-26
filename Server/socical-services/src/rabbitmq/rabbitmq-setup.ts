import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { StoreService } from 'src/domain/nodes/store/store.service';
import { StoreInput } from 'src/schema/graphql';
import { json } from 'stream/consumers';

@Injectable()
export class RabbitmqSetup implements OnModuleInit {
  private static instance: amqp.Connection;
  private static channel: amqp.ChanelService;
  constructor(private readonly storeService: StoreService) {}
  async onModuleInit() {
    if (!RabbitmqSetup.instance) {
      RabbitmqSetup.instance = await amqp.connect(
        'amqp://guest:guest@localhost:1010',
      );

      RabbitmqSetup.channel = await RabbitmqSetup.instance.createChannel();
      const exchange = 'RegisterQueueExchange';
      const queue = 'RegisterQueue';
      const routingKey = 'registerdirect_key';

      await RabbitmqSetup.channel.assertExchange(exchange, 'direct', {
        durable: true,
      });
      await RabbitmqSetup.channel.assertQueue(queue, { durable: false });
      await RabbitmqSetup.channel.bindQueue(queue, exchange, routingKey);
      await RabbitmqSetup.channel.consume(queue, async (msg) => {
        if (msg) {
          const message = JSON.parse(msg.content.toString());
          console.log(message);
          const store = {
            storeID: message.RegisterID,
            storeName: message.StoreName,
            areaID: message.AreaID,
            storeAddress: message.StoreAddress,
            longtitude: 123,
            latitude: 21,
            directInfo: message.DirectInfo,
            openTime: message.OpenTime,
            closeTime: message.OpenTime,
            toPrice: message.ToPrice,
            fromPrice: message.FromPrice,
            wifiName: message.WifiName,
            wifiPassword: message.WifiPass,
            types: message.Types ? [message.Types.split(';')] : [],
            convenients: message.Convenients
              ? [message.Convenients.split(';')]
              : [],
            phoneNumber: message.PhoneNumber,
            email: message.Email,
            facebookLink: message.FacebookLink,
            instagramLink: message.InstagramLink,
            website: message.Website,
            createBy: message.CreatedBy,
            createDate: message.CreatedDate,
            modifiedBy: message.ModifiedBy,
            modifiedDate: message.ModifiedDate,
          } as StoreInput;

          await this.storeService.createStore(store);

          RabbitmqSetup.channel.ack(msg); // Acknowledge receipt
        }
      });
      console.log('RabbitMQ exchange and queue set up');
    }
  }

  static Chanel() {
    return RabbitmqSetup.channel;
  }
}
