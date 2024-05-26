import { Injectable } from '@nestjs/common';
import {
  Review,
  ReviewInput,
  ReviewPaging,
  ReviewedResult,
} from 'src/schema/graphql';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async createReview(review: ReviewInput): Promise<Review> {
    return await this.reviewRepository.createReview(review);
  }

  async updateReview(id: string, review: ReviewInput): Promise<Review> {
    return await this.reviewRepository.updateReview(id, review);
  }

  async deleteReview(id: string): Promise<boolean> {
    return await this.reviewRepository.deleteReview(id);
  }
  async pagingReviews(
    skip: number,
    limit: number,
  ): Promise<Array<ReviewPaging>> {
    return await this.reviewRepository.pagingReviews(skip, limit);
  }

  async getReviewedByUser(userId: string): Promise<Array<ReviewedResult>> {
    return await this.reviewRepository.getReviewedByUser(userId);
  }

  async getReviewedByStore(storeID: string): Promise<Array<Review>> {
    return await this.reviewRepository.getReviewedByStore(storeID);
  }
}
