import { Module } from '@nestjs/common';
import { RabbitmqSetup } from './rabbitmq-setup';
import { StoreService } from 'src/domain/nodes/store/store.service';
import { StoreRepository } from 'src/domain/nodes/store/store.repository';

@Module({
  providers: [StoreRepository, StoreService, RabbitmqSetup],
  exports: [StoreRepository],
})
export class RabbitmqModule {}
