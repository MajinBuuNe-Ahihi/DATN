import React ,{useState} from "react";
import { BsDot, BsThreeDots, SlLike } from "../common/Icon";
import "./comments.scss";

type Props = {};

export default function Comments({}: Props) {
    const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="comments">
        {
            !open?
            <div className="comments__open" onClick={()=>setOpen(true)}>
                Xem tất cả các bình luận...
            </div>:<>
            <div className="comments__contain">
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
                        <div className="comments__date">12/12/2022</div>
                    </div>
                    <div className="comments__content">
                        Hoàng thanh tuyền nè ahihi
                    </div>
                    </div>
                    <div className="comments__bottom">
                    <div className="comments__handle">
                        <div className="comments__like">
                        <SlLike size={20} /> <span>1</span> <span>Thích</span>
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
                        <div className="comments__date">12/12/2022</div>
                    </div>
                    <div className="comments__content">
                        Hoàng thanh tuyền nè ahihi
                    </div>
                    </div>
                    <div className="comments__bottom">
                    <div className="comments__handle">
                        <div className="comments__like">
                        <SlLike size={20} /> <span>1</span> <span>Thích</span>
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
                        <div className="comments__date">12/12/2022</div>
                    </div>
                    <div className="comments__content">
                        Hoàng thanh tuyền nè ahihi
                    </div>
                    </div>
                    <div className="comments__bottom">
                    <div className="comments__handle">
                        <div className="comments__like">
                        <SlLike size={20} /> <span>1</span> <span>Thích</span>
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
                        <div className="comments__date">12/12/2022</div>
                    </div>
                    <div className="comments__content">
                        Hoàng thanh tuyền nè ahihi
                    </div>
                    </div>
                    <div className="comments__bottom">
                    <div className="comments__handle">
                        <div className="comments__like">
                        <SlLike size={20} /> <span>1</span> <span>Thích</span>
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
                        <div className="comments__date">12/12/2022</div>
                    </div>
                    <div className="comments__content">
                        Hoàng thanh tuyền nè ahihi
                    </div>
                    </div>
                    <div className="comments__bottom">
                    <div className="comments__handle">
                        <div className="comments__like">
                        <SlLike size={20} /> <span>1</span> <span>Thích</span>
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
                        <div className="comments__date">12/12/2022</div>
                    </div>
                    <div className="comments__content">
                        Hoàng thanh tuyền nè ahihi
                    </div>
                    </div>
                    <div className="comments__bottom">
                    <div className="comments__handle">
                        <div className="comments__like">
                        <SlLike size={20} /> <span>1</span> <span>Thích</span>
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
            </div>
            <div className="comments__open" onClick={()=>setOpen(false)}>
                Ẩn tất cả các bình luận
            </div>
            </>
        }
    </div>
  );
}
