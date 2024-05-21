import { Injectable } from '@nestjs/common';
import { Review, ReviewInput } from 'src/schema/graphql';
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
}
