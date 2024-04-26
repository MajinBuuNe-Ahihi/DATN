import React from "react";
import { BsThreeDots, IoCaretForward, BsDot,FaRegComments, RiShareForwardLine, AiOutlineHeart } from "../common/Icon";
import "./feed.scss";
import QuantityStarVote from "../common/QuantityStarVote";
import { Input } from "../common/Input";
import Comments from "./Comments";

type Props = {};

export default function Feed({}: Props) {
  return (
    <div className="feed">
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
      <div className="feed-main">
        <div className="feed-header">
          <div className="feed-header__left">
            <div className="feed-header__left-images">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/362258132_1957170851323667_394162700304658437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH6M2aW7CzoMPlINjlEl9Vr56xmaslv7EfnrGZqyW_sR5uhdMHWFhcaN7ItcVyjxl8In1gimVfXTVdJ649zCKwA&_nc_ohc=2eWcrecIMHYAb7Pz22Y&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD4qYf5kExDv0Wzl0wBTj2vkI4soS7Spqr1jf1msLb_5w&oe=662027D5"
                alt=""
              />
            </div>
            <div className="feed-header__left-info">
              <div className="feed-header__left-info-top">
                <span>Nghiện cà phê</span> <IoCaretForward size={15} />{" "}
                <span>Thong Dong Cafe</span>
              </div>
              <div className="feed-header__left-info-bottom">
                <div className="feed-header__star-point">
                  <span>4.6</span> <QuantityStarVote quantity={4.6} />
                </div>
                <BsDot size={20} />
                <div className="feed-header__time">Một năm trước</div>
              </div>
            </div>
          </div>
          <div className="feed-header__right">
            <div className="feed-header__options">
              <BsThreeDots size={20} />
            </div>
          </div>
        </div>
        <div className="feed-content"> 
        🌿Nhà ở khu Hoàng Mai, mà mãi mới kiếm được quán cafe rộng rãi, xanh mát như này hic.<br/> Quán nằm gọn xinh trong một con ngõ yên bình, không gian thoáng mát, ngập tràn cây cỏ.<br/>
         Quán có 2 tầng đủ view vừa sống ảo, vừa có thể học tập, làm việc.<br/> Tone màu chủ đạo là trắng và nâu, giữa quán có hồ cá Koi xinh lắm.<br/>
        🌿Mình có gọi một cốc sinh tố bơ hạnh nhân và nước cam cà rốt hạt chia, với gọi thêm bánh su kem choco, xoài; cookie choco, mouse chanh leo.<br/> Đồ uống với bánh đều có vị ngọt thanh, khá vừa miệng, mình có hỏi thì quán bảo là bánh tươi, làm tại bếp riêng, bán ko hết thì trong 24h sẽ huỷ.<br/>
        🌿 Nhân viên siêu cute, nhiệt tình, và chu đáo.     
        </div>
        <div className="feed-images t-5">
          <div style={{gridArea: 't1'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/f8f4050a-2cc6-4696-9ac7-b3301cff6da2-309312369_2024871071056846_288.jpg?w=640" alt="" />
          </div>
         <div  style={{gridArea: 't2'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/52bcc7be-a8f8-40ab-b0e9-832cb89c9c90-309055455_2024872444390042_564.jpg?w=640" alt="" />
         </div>
         <div style={{gridArea: 't3'}}>
         <img   src="https://toidicafe.vn/static/images/2022/10/29/e0af43b9-2a68-46be-b39d-6788025f1034-308595319_2024872854390001_181.jpg?w=640" alt="" />
         </div>
          <div style={{gridArea: 't4'}}>
          <img   src="https://toidicafe.vn/static/images/2022/10/29/f91ec86e-3f87-4cc8-9a85-36290b99be0b-308466624_2024872907723329_322.jpg?w=640" alt="" />
          </div>
          <div style={{gridArea: 't5'}}>
          <img  src="https://toidicafe.vn/static/images/2022/10/29/ba14c88d-d47a-4495-9862-10cf52f31d50-309211975_2024872501056703_164.jpg?w=960" alt="" />
          </div>
        </div>
        <div className="feed-handle">
          <div className="feed-handle__like">
          <AiOutlineHeart size={20} />  Thích
          </div>
          <div className="feed-handle__comment">
            <FaRegComments size={20} />
            <span>Bình luận</span>
          </div>
          <div className="feed-handle__share">
            <RiShareForwardLine size={20} />
            Chia sẻ
          </div>
        </div>
        <div className="feed-comments">
        <div className="feed-comments__avatar">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLcNSd5XVDxZIOAq0uAzqWpGqq-5k6osA6um7Flb23JyfPp=s96-c" alt="" />
        </div>
        <div className="feed-comments__text">
           <Input className="input" type="text" name="inputComment" placeholder="Viết bình luận"/>
        </div>
        </div>
      <Comments/>
      </div>
    </div>
  );
}
