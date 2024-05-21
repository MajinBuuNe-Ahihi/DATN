import { Injectable } from '@nestjs/common';
import { Comment, CommentInput, Entities, Relations } from 'src/schema/graphql';
import { node } from 'cypher-query-builder';
import { QueryRepository } from 'src/neo4j/query.repository';

@Injectable()
export class CommentRepository {
  constructor(private readonly queryRepository: QueryRepository) {}

  async createComment(comment: CommentInput): Promise<Comment> {
    const query = this.queryRepository.initQuery();
    const {
      commentID,
      userID,
      reviewID,
      content,
      commentLike,
      createBy,
      createDate,
      modifiedBy,
      modifiedDate,
    } = comment;
    const result = await query
      .raw(
        `
    MATCH (u:${Entities.User} {userID:"${userID}" })
    MATCH( r:${Entities.Review} {reviewID:"${reviewID}")
    CREATE (c:${Entities.Comment} {commentID:"${commentID}",content:"${content}",commentLike:${commentLike}
        ,createBy:${createBy},createDate:${createDate},userID: :, reviewID:"${reviewID}",modifiedBy:${modifiedBy}, modifiedDate: ${modifiedDate}})
    CREATE (c)-[:${Relations.COMMENT_TO} {createdDate: ${createDate}]->(r)
    CREATE (c)<-[:${Relations.COMMENT_BY} {createdDate: ${createDate}]->(u)
    RETURN C
        `,
      )
      .run();

    if (result.length > 0) {
      return result[0] as Comment;
    }
    return null;
  }
  async deleteComment(id: string): Promise<boolean> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .match(node[(Entities.Comment, Entities.Comment)])
      .where({
        [`${Entities.Review}.commentID`]: id,
      })
      .delete(Entities.Comment)
      .run();
    if (result.length > 0) {
      return true;
    }
    return false;
  }
  async updateComment(id: string, comment: CommentInput): Promise<Comment> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .match([node(Entities.Comment, Entities.Comment)])
      .where({
        [`${Entities.Review}.commentID`]: id,
      })
      .setValues(comment)
      .return(Entities.Comment)
      .run();
    if (result.length > 0) {
      return result[0] as Comment;
    }
    return null;
  }
}
