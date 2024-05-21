import { Injectable } from '@nestjs/common';
import { Store, StoreDetailResult, StoreInput } from 'src/schema/graphql';
import { StoreRepository } from './store.repository';

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async createStore(store: StoreInput): Promise<Store> {
    return await this.storeRepository.createStore(store);
  }
  async deleteStore(id: string): Promise<boolean> {
    return await this.storeRepository.deleteStore(id);
  }
  async updateStore(id: string, store: StoreInput): Promise<Store> {
    return await this.storeRepository.updateStore(id, store);
  }

  async getStore(id: string): Promise<StoreDetailResult> {
    return await this.storeRepository.getStore(id);
  }
}
