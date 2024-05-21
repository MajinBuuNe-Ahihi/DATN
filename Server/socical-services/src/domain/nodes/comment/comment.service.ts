import { Injectable } from '@nestjs/common';
import { Comment, CommentInput } from 'src/schema/graphql';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}
  async createComment(comment: CommentInput): Promise<Comment> {
    return await this.commentRepository.createComment(comment);
  }

  async updateComment(id: string, comment: CommentInput): Promise<Comment> {
    return await this.commentRepository.updateComment(id, comment);
  }
  async deleteComment(id: string): Promise<boolean> {
    return await this.commentRepository.deleteComment(id);
  }
}
