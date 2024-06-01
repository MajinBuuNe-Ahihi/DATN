import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Store,
  StoreDetailResult,
  StoreInput,
  StorePagingResult,
} from 'src/schema/graphql';
import { StoreService } from './store.service';

@Resolver()
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}
  @Mutation()
  async createStore(@Args('store') store: StoreInput): Promise<Store> {
    return await this.storeService.createStore(store);
  }
  @Mutation()
  async deleteStore(@Args('id') id: string): Promise<boolean> {
    return await this.storeService.deleteStore(id);
  }
  @Mutation()
  async updateStore(
    @Args('id') id: string,
    @Args('store') store: StoreInput,
  ): Promise<Store> {
    return await this.storeService.updateStore(id, store);
  }

  @Query()
  async getStore(@Args('id') id: string): Promise<StoreDetailResult> {
    return await this.storeService.getStore(id);
  }

  @Query()
  async searchStore(
    @Args('search') search: string,
  ): Promise<Array<StorePagingResult>> {
    return await this.storeService.searchStore(search);
  }
}
