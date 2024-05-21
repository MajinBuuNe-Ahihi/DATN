import { CommentRepository } from './comment.repository';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [CommentRepository, CommentResolver, CommentService],
  exports: [CommentRepository],
})
export class CommentModule {}
