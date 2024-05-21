import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Review, ReviewInput } from 'src/schema/graphql';
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
}
