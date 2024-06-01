import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Comment, CommentInput } from 'src/schema/graphql';
import { CommentService } from './comment.service';

@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
  @Mutation()
  async createComment(
    @Args('comment') comment: CommentInput,
  ): Promise<Comment> {
    return await this.commentService.createComment(comment);
  }
  @Mutation()
  async deleteComment(@Args('id') id: string): Promise<boolean> {
    return await this.commentService.deleteComment(id);
  }
  @Mutation()
  async updateComment(
    @Args('id') id: string,
    @Args('comment') comment: CommentInput,
  ): Promise<Comment> {
    return await this.commentService.updateComment(id, comment);
  }

  @Query()
  async getCommentByReview(
    @Args('reviewID') id: string,
    @Args('offset') offset: number,
    @Args('limit') limit: number,
  ): Promise<Array<Comment>> {
    return await this.commentService.getCommentByReview(id, offset, limit);
  }
}
