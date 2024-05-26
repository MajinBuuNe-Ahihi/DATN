import { StoreRepository } from './store.repository';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [StoreRepository, StoreService, StoreResolver],
  exports: [StoreRepository],
})
export class StoreModule {}
