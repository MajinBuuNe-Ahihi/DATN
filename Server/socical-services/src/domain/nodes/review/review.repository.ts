import { Injectable } from '@nestjs/common';
import { QueryRepository } from 'src/neo4j/query.repository';
import { node } from 'cypher-query-builder';
import { Entities, Relations, Review, ReviewInput } from 'src/schema/graphql';

@Injectable()
export class ReviewRepository {
  constructor(private readonly queryRepository: QueryRepository) {}

  async createReview(review: ReviewInput): Promise<Review> {
    console.log('creating review');
    const {
      userID,
      storeID,
      description,
      foodRate,
      like,
      locationRate,
      placeRate,
      priceRate,
      reviewID,
      serviceRate,
      title,
      view,
      createBy,
      createDate,
      modifiedBy,
      modifiedDate,
    } = review;
    const query = this.queryRepository.initQuery();
    const result = await query
      .raw(
        ` MATCH (u:User {userID: "${userID}"})
          MATCH (s:Store {storeID: "${storeID}"})
           CREATE (r:Review {
             reviewID: "${reviewID}",
             userID: "${userID}",
             storeID: "${storeID}",
             description: "${description}",
             foodRate: ${foodRate},
             like: ${like},
             locationRate: ${locationRate},
             placeRate: ${placeRate},
             priceRate: ${priceRate},
             serviceRate: ${serviceRate},
             title: "${title}",
             view: ${view},
             createBy: "${createBy}",
             createDate: ${createDate},
             modifiedBy: "${modifiedBy}",
             modifiedDate: ${modifiedDate}
           })
           CREATE (u)-[:${Relations.REVIEW_BY} {createdDate: ${createDate}]->(r)
           CREATE (r)-[:${Relations.REVIEW_TO} {createdDate: ${createDate}}]->(s)
           RETURN r`,
      )
      .run();
    if (result.length > 0) {
      return result[0] as Review;
    }
    return null;
  }

  async updateReview(id: string, review: ReviewInput): Promise<Review> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .match([node(Entities.Review, Entities.Review)])
      .where({
        [`${Entities.Review}.reviewID`]: id,
      })
      .setValues(review)
      .return(Entities.Review)
      .run();
    if (result.length > 0) {
      return result[0] as Review;
    }
    return null;
  }

  async deleteReview(id: string): Promise<boolean> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .match([node(Entities.Review, Entities.Review)])
      .where({
        [`${Entities.Review}.reviewID`]: id,
      })
      .delete(Entities.Review)
      .run();
    if (result.length > 0) {
      return true;
    }
    return false;
  }
}
