import { Injectable } from '@nestjs/common';
import {
  Store,
  StoreInput,
  Entities,
  Relations,
  StoreDetailResult,
  StorePagingResult,
} from 'src/schema/graphql';
import { node } from 'cypher-query-builder';
import { QueryRepository } from 'src/neo4j/query.repository';

@Injectable()
export class StoreRepository {
  constructor(private readonly queryRepository: QueryRepository) {}
  async createStore(store: StoreInput): Promise<Store> {
    const {
      areaID,
      closeTime,
      convenients,
      directInfo,
      email,
      facebookLink,
      fromPrice,
      instagramLink,
      latitude,
      longtitude,
      openTime,
      phoneNumber,
      storeAddress,
      storeID,
      storeName,
      toPrice,
      types,
      website,
      description,
      wifiName,
      wifiPassword,
    } = store;
    console.log(types);
    const query = this.queryRepository.initQuery();
    const query2 = this.queryRepository.initQuery();
    const query3 = this.queryRepository.initQuery();
    const query4 = this.queryRepository.initQuery();
    const result = await query
      .raw(
        `
        CREATE (s:${Entities.Store} {storeID: "${storeID}",
        storeName: "${storeName}",
        areaID: "${areaID}",
        storeAddress: "${storeAddress}",
        longtitude: "${longtitude}",
        latitude: "${latitude}",
        directInfo:"${directInfo}",
        openTime: "${openTime}",
        closeTime: "${closeTime}",
        toPrice: "${toPrice}",
        fromPrice: "${fromPrice}",
        wifiName: "${wifiName}",
        wifiPassword: "${wifiPassword}",
        phoneNumber: "${phoneNumber}",
        email: "${email}",
        facebookLink: "${facebookLink}",
        instagramLink: "${instagramLink}",
        website: "${website}",
        description: "${description}",
        createBy:  "hvmanh",
        createDate: ${Date.now()},
        modifiedBy: "hvmanh",
        modifiedDate: ${Date.now()}
        })
        RETURN s
        `,
      )
      .run();
    const raw2 = `
    With [${types.map((i) => `"${i}"`).join(',')}] as tids
    UNWIND tids as tid
    MATCH (s:${Entities.Store} {storeID: "${storeID}"})
    MATCH (t:${Entities.ShopType} {shopTypeID: tid})
    CREATE (s)<-[:${Relations.IN_SHOP_TYPE}]-(t)
    RETURN s
    `;
    await query2.raw(raw2).run();
     console.log(raw2);
    const raw3 = `
      MATCH (s:${Entities.Store} {storeID: "${storeID}"})
      MATCH (a:${Entities.Area} {areaID: "${areaID}"})
      CREATE (s)<-[:${Relations.IN_AREA}]-(a)
      RETURN s
      `;
    await query3.raw(raw3).run();
    console.log(raw3);
    const raw4 = `
      With [${convenients.map((i) => `"${i}"`).join(',')}] as cids
      UNWIND cids as cid
        MATCH (s:${Entities.Store} {storeID: "${storeID}"})
        MATCH(c:${Entities.Convenient} {convenientID: cid})
        CREATE (s)<-[:${Relations.IN_CONVENIENCE}]-(c)
        RETURN s
        `;
        console.log(raw4);
    await query4.raw(raw4).run();
    if (result.length > 0) {
      console.log(result[0].s.properties);
      return result[0].s.properties as Store;
    }
    return null;
  }
  async deleteStore(id: string): Promise<boolean> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .match([node(Entities.Store, Entities.Store)])
      .where({
        [`${Entities.Store}.storeID`]: id,
      })
      .delete(Entities.Store)
      .run();
    if (result.length > 0) {
      return true;
    }
    return false;
  }
  async updateStore(id: string, store: StoreInput): Promise<Store> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .match([node(Entities.Store, Entities.Store)])
      .where({
        [`${Entities.Store}.storeID`]: id,
      })
      .setValues(store)
      .return(Entities.Store)
      .run();
    if (result.length > 0) {
      return result[0] as Store;
    }
    return null;
  }

  async getStore(id: string): Promise<StoreDetailResult> {
    const result = await this.queryRepository
      .initQuery()
      .raw(
        `
        MATCH (Store:Store {storeID: "${id}"})
        RETURN Store
      `,
      )
      .run();
    const result1 = await this.queryRepository
      .initQuery()
      .raw(
        `
        MATCH (ShopType:ShopType)-[:IN_SHOP_TYPE]->(Store:Store {storeID: "${id}"})
        RETURN ShopType
      `,
      )
      .run();
    const result2 = await this.queryRepository
      .initQuery()
      .raw(
        `
        MATCH (Store:Store {storeID: "${id}"})<-[i:IN_CONVENIENCE]-(Convenient:Convenient)
        RETURN  Convenient
      `,
      )
      .run();

    if (result.length > 0) {
      return {
        store: result[0].Store.properties as Store,
        shopType:
          result1.length > 0 ? result1.map((i) => i.ShopType.properties) : null,
        convenients:
          result2.length > 0
            ? result2.map((i) => i.Convenient.properties)
            : null,
      } as StoreDetailResult;
    }
    return null;
  }

  async searchStore(search: string): Promise<Array<StorePagingResult>> {
    const result = await this.queryRepository
      .initQuery()
      .raw(
        `      
        MATCH (n:Store)
        MATCH (n) <- [:IN_AREA] - (a:Area)
        OPTIONAL MATCH (n) <- [:REVIEW_TO] - (r:Review)
        MATCH (c:Catalog) - [:CONVINIENT_HAS] -> (b:Convenient) - [:IN_CONVENIENCE] -> (n)
       MATCH (c:Catalog) - [:TYPE_HAS] -> (d:ShopType) - [:IN_SHOP_TYPE] -> (n)
        WHERE 
        toLower(n.storeName) CONTAINS  toLower("${search}") or
        toLower(n.storeAddress) CONTAINS   toLower("${search}") or
        toLower(c.catalogName) contains    toLower("${search}") or
        toLower(a.areaName) contains  toLower("${search}")
        RETURN DISTINCT  n, collect(DISTINCT r) as reviews
        skip 0
        limit 10
      `,
      )
      .run();

    if (result.length > 0) {
      return result.map((item) => {
        return {
          store: item.n.properties,
          reviews: item.reviews.map((item) => item.properties),
        };
      }) as [StorePagingResult];
    }
    return null;
  }
}
