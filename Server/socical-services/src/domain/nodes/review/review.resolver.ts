import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Review,
  ReviewInput,
  ReviewPaging,
  ReviewedResult,
} from 'src/schema/graphql';
import { ReviewService } from './review.service';

@Resolver()
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}
  @Mutation()
  async createReview(@Args('review') review: ReviewInput): Promise<Review> {
    return await this.reviewService.createReview(review);
  }

  @Mutation()
  async updateReview(
    @Args('id') id: string,
    @Args('review') review: ReviewInput,
  ): Promise<Review> {
    return await this.reviewService.updateReview(id, review);
  }
  @Mutation()
  async deleteReview(@Args('id') id: string): Promise<boolean> {
    return await this.reviewService.deleteReview(id);
  }

  @Query()
  async pagingReviews(
    @Args('skip') skip: number,
    @Args('limit') limit: number,
  ): Promise<Array<ReviewPaging>> {
    console.log(skip, limit);
    return await this.reviewService.pagingReviews(skip, limit);
  }

  @Query()
  async getReviewedByUser(
    @Args('userId') userId: string,
  ): Promise<Array<ReviewedResult>> {
    return await this.reviewService.getReviewedByUser(userId);
  }

  @Query()
  async getReviewedByStore(
    @Args('storeID') storeID: string,
  ): Promise<Array<Review>> {
    return await this.reviewService.getReviewedByStore(storeID);
  }
}
