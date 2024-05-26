import { Injectable } from '@nestjs/common';
import { QueryRepository } from 'src/neo4j/query.repository';
import { node } from 'cypher-query-builder';
import {
  Entities,
  Relations,
  Review,
  ReviewInput,
  ReviewPaging,
  ReviewedResult,
  Store,
  User,
} from 'src/schema/graphql';

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
        `
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
           RETURN r`,
      )
      .run();

    await this.queryRepository
      .initQuery()
      .raw(
        `
        MATCH (r:Review {reviewID: "${reviewID}"})
        MATCH (s:Store {storeID: "${storeID}"})
        CREATE (r)-[:${Relations.REVIEW_TO}]->(s)
        RETURN r`,
      )
      .run();
    await this.queryRepository
      .initQuery()
      .raw(
        `
           MATCH (r:Review {reviewID: "${reviewID}"})
           MATCH (u:User {userID: "${userID}"})
           CREATE (u)-[:${Relations.REVIEW_BY}]->(r)
           RETURN r`,
      )
      .run();
    if (result.length > 0) {
      return result[0].r.properties as Review;
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

  async getReviewedByUser(userId: string): Promise<Array<ReviewedResult>> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .raw(
        `
      MATCH (r:Review)<-[:${Relations.REVIEW_BY}]-(u:User {userID: "${userId}"})
      Return r,u
      ORDER BY r.createDate DESC
      limit 5
     `,
      )
      .run();
    if (result.length > 0) {
      return result.map((item) => {
        return {
          user: item.u.properties as User,
          review: item.r.properties as Review,
        };
      }) as Array<ReviewedResult>;
    }
    return null;
  }

  async getReviewedByStore(storeID: string): Promise<Array<Review>> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .raw(
        `
      MATCH (r:Review)-[:${Relations.REVIEW_TO}]->(u:Store {storeID: "${storeID}"})
      Return r
     `,
      )
      .run();
    if (result.length > 0) {
      return result.map((item) => item.r.properties) as Array<Review>;
    }
    return null;
  }
  async pagingReviews(
    skip: number,
    limit: number,
  ): Promise<Array<ReviewPaging>> {
    const query = this.queryRepository.initQuery();

    const result = await query
      .raw(
        `
        MATCH (r:${Entities.Review})
        WITH r,
              (r.locationRate + r.placeRate + r.serviceRate + r.foodRate + r.priceRate) / 5 AS avgRating,
              r.like AS likes,
              r.view AS views,
              datetime().epochMillis - r.createDate AS recency
        WHERE avgRating >= 2.0  
        WITH r, avgRating, likes, views, recency,
              (avgRating * 0.5 + likes * 0.3 + views * 0.2) AS recommendationScore
        ORDER BY recommendationScore DESC, recency ASC
        SKIP ${skip}
        LIMIT ${limit}
        MATCH (s:${Entities.Store})<-[:${Relations.REVIEW_TO}]-(r)
        MATCH (u:${Entities.User})-[:${Relations.REVIEW_BY}]->(r)
        RETURN r,s,u
     `,
      )
      .run();

    if (result.length > 0) {
      return result.map((item) => {
        return {
          review: item.r.properties as Review,
          store: item.s.properties as Store,
          user: item.u.properties as User,
        };
      }) as Array<ReviewPaging>;
    }
    return null;
  }
}
