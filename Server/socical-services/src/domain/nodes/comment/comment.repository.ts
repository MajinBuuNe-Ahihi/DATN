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
    CREATE (c:${Entities.Comment} {commentID:"${commentID}",content:"${content}",commentLike:"${commentLike}"
        ,createBy:"${createBy}",createDate:"${createDate}",userID: "${userID}", reviewID:"${reviewID}",modifiedBy:"${modifiedBy}", modifiedDate: "${modifiedDate}"})
    RETURN c
        `,
      )
      .run();
    await this.queryRepository
      .initQuery()
      .raw(
        `
        MATCH( r:${Entities.Review} {reviewID:"${reviewID}"})
        MATCH (c:${Entities.Comment} {commentID:"${commentID}"})
        CREATE (c)-[:${Relations.COMMENT_TO}]->(r)
      `,
      )
      .run();

    await this.queryRepository
      .initQuery()
      .raw(
        `
      MATCH (u:${Entities.User} {userID:"${userID}" })
      MATCH (c:${Entities.Comment} {commentID:"${commentID}"})
      CREATE (c)<-[:${Relations.COMMENT_BY}]-(u)
    `,
      )
      .run();

    if (result.length > 0) {
      return result[0].c.properties as Comment;
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

  async getCommentByReview(
    id: string,
    offset: number,
    limit: number,
  ): Promise<Array<Comment>> {
    const query = this.queryRepository.initQuery();
    const result = await query
      .raw(
        `
      MATCH (c:${Entities.Comment})
      Where
         c.reviewID = "${id}"
      return c
      ORDER BY c.createDate desc
      skip ${offset}
      limit ${limit}
      `,
      )
      .run();
    if (result.length > 0) {
      return result.map((item: any) => item.c.properties) as Array<Comment>;
    }
    return null;
  }
}
