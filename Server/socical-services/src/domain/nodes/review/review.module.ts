import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewRepository } from './review.repository';
import { ReviewResolver } from './review.resolver';

@Module({
  providers: [ReviewService, ReviewRepository, ReviewResolver],
  exports: [ReviewRepository],
})
export class ReviewModule {}
