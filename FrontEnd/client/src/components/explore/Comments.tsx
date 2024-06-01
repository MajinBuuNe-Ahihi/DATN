import React, { useEffect, useState } from "react";
import { BsDot, BsThreeDots, SlLike } from "../common/Icon";
import "./comments.scss";
import { gql, useQuery } from "@apollo/client";

type Props = {
  id: string;
  refresh: string;
};

const QUERY = gql`
  query Query($reviewId: String, $offset: Int, $limit: Int) {
    getCommentByReview(reviewID: $reviewId, offset: $offset, limit: $limit) {
      commentID
      userID
      reviewID
      content
      commentLike
      createBy
      createDate
      modifiedBy
      modifiedDate
    }
  }
`;
export default function Comments({ refresh, id }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const { loading, error, data, refetch } = useQuery(QUERY, {
    variables: {
      reviewId: id,
      offset: 0,
      limit: 10,
    },
  });

  useEffect(() => {
    refetch({
      reviewId: id,
      offset: 0,
      limit: 10,
    });
  }, [refresh]);

  return (
    <div className="comments">
      {data?.getCommentByReview?.length > 0 ? (
        !open ? (
          <div className="comments__open" onClick={() => setOpen(true)}>
            Xem tất cả các bình luận...
          </div>
        ) : (
          <>
            <div className="comments__contain">
              {data?.getCommentByReview?.map((comment: any) => (
                <div className="comments__item">
                  <div className="comments__avatar">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c"
                      alt=""
                    />
                  </div>
                  <div className="comments__main">
                    <div className="comments__text">
                      <div className="comments__top">
                        <div className="comments__name">Hoàng mạnh</div>
                        <div className="comments__date">
                          {comment.createDate}
                        </div>
                      </div>
                      <div className="comments__content">{comment.content}</div>
                    </div>
                    <div className="comments__bottom">
                      <div className="comments__handle">
                        <div className="comments__like">
                          <SlLike size={20} />{" "}
                          <span>{comment.commentLike}</span> <span>Thích</span>
                          <BsDot size={20} />
                          <span>Trả lời</span>
                        </div>
                      </div>
                      <div className="comments__option">
                        <BsThreeDots size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="comments__open" onClick={() => setOpen(false)}>
              Ẩn tất cả các bình luận
            </div>
          </>
        )
      ) : null}
    </div>
  );
}
