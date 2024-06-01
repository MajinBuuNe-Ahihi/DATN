/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Entities {
  User = 'User',
  Review = 'Review',
  Comment = 'Comment',
  Store = 'Store',
  Catalog = 'Catalog',
  ShopType = 'ShopType',
  Convenient = 'Convenient',
  Area = 'Area',
}

export enum Relations {
  REVIEW_TO = 'REVIEW_TO',
  IN_CATALOG = 'IN_CATALOG',
  IN_CONVENIENCE = 'IN_CONVENIENCE',
  IN_SHOP_TYPE = 'IN_SHOP_TYPE',
  REVIEW_BY = 'REVIEW_BY',
  COMMENT_BY = 'COMMENT_BY',
  COMMENT_TO = 'COMMENT_TO',
  OF_AREA = 'OF_AREA',
  IN_AREA = 'IN_AREA',
}

export class UserInput {
  userID?: Nullable<string>;
  userName?: Nullable<string>;
  password?: Nullable<string>;
  fullName?: Nullable<string>;
  email?: Nullable<string>;
}

export class ReviewPagingInput {
  skip?: Nullable<number>;
  limit?: Nullable<number>;
}

export class ReviewInput {
  reviewID?: Nullable<string>;
  userID?: Nullable<string>;
  storeID?: Nullable<string>;
  title?: Nullable<string>;
  description?: Nullable<string>;
  locationRate?: Nullable<number>;
  placeRate?: Nullable<number>;
  serviceRate?: Nullable<number>;
  foodRate?: Nullable<number>;
  priceRate?: Nullable<number>;
  like?: Nullable<number>;
  view?: Nullable<number>;
  createBy?: Nullable<string>;
  createDate?: Nullable<DateTime>;
  modifiedBy?: Nullable<string>;
  modifiedDate?: Nullable<DateTime>;
}

export class CommentInput {
  commentID?: Nullable<string>;
  userID?: Nullable<string>;
  reviewID?: Nullable<string>;
  content?: Nullable<string>;
  commentLike?: Nullable<number>;
  createBy?: Nullable<string>;
  createDate?: Nullable<DateTime>;
  modifiedBy?: Nullable<string>;
  modifiedDate?: Nullable<DateTime>;
}

export class StoreInput {
  storeID?: Nullable<string>;
  storeName?: Nullable<string>;
  areaID?: Nullable<string>;
  storeAddress?: Nullable<string>;
  longtitude?: Nullable<number>;
  latitude?: Nullable<number>;
  description?: Nullable<string>;
  directInfo?: Nullable<string>;
  openTime?: Nullable<string>;
  closeTime?: Nullable<string>;
  toPrice?: Nullable<string>;
  fromPrice?: Nullable<string>;
  wifiName?: Nullable<string>;
  wifiPassword?: Nullable<string>;
  types?: Nullable<Nullable<string>[]>;
  convenients?: Nullable<Nullable<string>[]>;
  phoneNumber?: Nullable<string>;
  email?: Nullable<string>;
  facebookLink?: Nullable<string>;
  instagramLink?: Nullable<string>;
  website?: Nullable<string>;
}

export class AreaInput {
  areaID?: Nullable<string>;
  areaName?: Nullable<string>;
  areaParent?: Nullable<string>;
}

export class CatalogInput {
  catalogID?: Nullable<string>;
  catalogName?: Nullable<string>;
}

export class ShopTypeInput {
  shopTypeID?: Nullable<string>;
  shopTypeName?: Nullable<string>;
}

export class ConvenientInput {
  convenientID?: Nullable<string>;
  convenientName?: Nullable<string>;
}

export class FilterInput {
  action?: Nullable<number>;
  value?: Nullable<string>;
  relation?: Nullable<string>;
}

export class User {
  userID?: Nullable<string>;
  userName: string;
  password: string;
  fullName: string;
  email: string;
  createBy?: Nullable<string>;
  createDate?: Nullable<DateTime>;
  modifiedBy?: Nullable<string>;
  modifiedDate?: Nullable<DateTime>;
}

export class Review {
  reviewID?: Nullable<string>;
  userID?: Nullable<string>;
  storeID?: Nullable<string>;
  title?: Nullable<string>;
  description?: Nullable<string>;
  locationRate?: Nullable<number>;
  placeRate?: Nullable<number>;
  serviceRate?: Nullable<number>;
  foodRate?: Nullable<number>;
  priceRate?: Nullable<number>;
  like?: Nullable<number>;
  view?: Nullable<number>;
  createBy?: Nullable<string>;
  createDate?: Nullable<DateTime>;
  modifiedBy?: Nullable<string>;
  modifiedDate?: Nullable<DateTime>;
}

export class Comment {
  commentID: string;
  userID?: Nullable<string>;
  reviewID?: Nullable<string>;
  content: string;
  commentLike?: Nullable<number>;
  createBy?: Nullable<string>;
  createDate?: Nullable<DateTime>;
  modifiedBy?: Nullable<string>;
  modifiedDate?: Nullable<DateTime>;
}

export class Store {
  storeID?: Nullable<string>;
  storeName?: Nullable<string>;
  areaID?: Nullable<string>;
  storeAddress?: Nullable<string>;
  directInfo?: Nullable<string>;
  openTime?: Nullable<string>;
  closeTime?: Nullable<string>;
  longtitude?: Nullable<number>;
  latitude?: Nullable<number>;
  description?: Nullable<string>;
  toPrice?: Nullable<string>;
  fromPrice?: Nullable<string>;
  wifiName?: Nullable<string>;
  wifiPassword?: Nullable<string>;
  types?: Nullable<Nullable<string>[]>;
  convenients?: Nullable<Nullable<string>[]>;
  phoneNumber?: Nullable<string>;
  email?: Nullable<string>;
  facebookLink?: Nullable<string>;
  instagramLink?: Nullable<string>;
  website?: Nullable<string>;
  createBy?: Nullable<string>;
  createDate?: Nullable<DateTime>;
  modifiedBy?: Nullable<string>;
  modifiedDate?: Nullable<DateTime>;
}

export class Catalog {
  catalogID?: Nullable<string>;
  catalogName?: Nullable<string>;
}

export class ShopType {
  shopTypeID?: Nullable<string>;
  shopTypeName?: Nullable<string>;
}

export class ReviewPaging {
  review?: Nullable<Review>;
  store?: Nullable<Store>;
  user?: Nullable<User>;
}

export class Convenient {
  convenientID?: Nullable<string>;
  convenientName?: Nullable<string>;
}

export class Area {
  areaID?: Nullable<string>;
  areaName?: Nullable<string>;
  areaParent?: Nullable<string>;
}

export class UserGenreMovieCountRecResult {
  genreName: string;
  movieCount: number;
}

export class MovieRatingCountRecResult {
  title: string;
  popularity: number;
}

export class StoreDetailResult {
  store?: Nullable<Store>;
  convenients?: Nullable<Nullable<Convenient>[]>;
  shopType?: Nullable<Nullable<ShopType>[]>;
}

export class ReviewedResult {
  user?: Nullable<User>;
  review?: Nullable<Review>;
}

export class StorePagingResult {
  reviews?: Nullable<Nullable<Review>[]>;
  store?: Nullable<Store>;
}

export abstract class IQuery {
  abstract helloWorld(): Nullable<string> | Promise<Nullable<string>>;

  abstract login(
    email?: Nullable<string>,
    password?: Nullable<string>,
  ): Nullable<User> | Promise<Nullable<User>>;

  abstract getUser(
    id?: Nullable<string>,
  ): Nullable<User> | Promise<Nullable<User>>;

  abstract getStoreByNameFilter(
    filter?: Nullable<Nullable<FilterInput>[]>,
    offset?: Nullable<number>,
    limit?: Nullable<number>,
  ): Nullable<Store> | Promise<Nullable<Store>>;

  abstract getReviewByStore(
    storeID?: Nullable<string>,
    offset?: Nullable<number>,
    limit?: Nullable<number>,
  ): Nullable<Review> | Promise<Nullable<Review>>;

  abstract getCommentByReview(
    reviewID?: Nullable<string>,
    offset?: Nullable<number>,
    limit?: Nullable<number>,
  ): Nullable<Nullable<Comment>[]> | Promise<Nullable<Nullable<Comment>[]>>;

  abstract getReviewByFilter(
    filter?: Nullable<Nullable<FilterInput>[]>,
    offset?: Nullable<number>,
    limit?: Nullable<number>,
  ): Nullable<Review> | Promise<Nullable<Review>>;

  abstract getStore(
    id?: Nullable<string>,
  ): Nullable<StoreDetailResult> | Promise<Nullable<StoreDetailResult>>;

  abstract searchStore(
    search?: Nullable<string>,
  ):
    | Nullable<Nullable<StorePagingResult>[]>
    | Promise<Nullable<Nullable<StorePagingResult>[]>>;

  abstract getReviewedByUser(
    userId?: Nullable<string>,
  ):
    | Nullable<Nullable<ReviewedResult>[]>
    | Promise<Nullable<Nullable<ReviewedResult>[]>>;

  abstract getReviewedByStore(
    storeID?: Nullable<string>,
  ): Nullable<Nullable<Review>[]> | Promise<Nullable<Nullable<Review>[]>>;

  abstract pagingReviews(
    skip?: Nullable<number>,
    limit?: Nullable<number>,
  ):
    | Nullable<Nullable<ReviewPaging>[]>
    | Promise<Nullable<Nullable<ReviewPaging>[]>>;

  abstract movieRatingCountRec(
    movieName: string,
    limit?: Nullable<number>,
  ):
    | Nullable<Nullable<MovieRatingCountRecResult>[]>
    | Promise<Nullable<Nullable<MovieRatingCountRecResult>[]>>;

  abstract userGenreMovieCountRec(
    userName: string,
    limit?: Nullable<number>,
  ):
    | Nullable<Nullable<UserGenreMovieCountRecResult>[]>
    | Promise<Nullable<Nullable<UserGenreMovieCountRecResult>[]>>;
}

export abstract class IMutation {
  abstract createUser(user?: Nullable<UserInput>): User | Promise<User>;

  abstract deleteUser(id: string): boolean | Promise<boolean>;

  abstract updateUser(id: string, user: UserInput): User | Promise<User>;

  abstract createReview(
    review?: Nullable<ReviewInput>,
  ): Review | Promise<Review>;

  abstract deleteReview(id: string): boolean | Promise<boolean>;

  abstract updateReview(
    id: string,
    review: ReviewInput,
  ): Review | Promise<Review>;

  abstract createComment(
    comment?: Nullable<CommentInput>,
  ): Comment | Promise<Comment>;

  abstract deleteComment(id: string): boolean | Promise<boolean>;

  abstract updateComment(
    id: string,
    comment: CommentInput,
  ): Comment | Promise<Comment>;

  abstract createStore(store?: Nullable<StoreInput>): Store | Promise<Store>;

  abstract deleteStore(id: string): boolean | Promise<boolean>;

  abstract updateStore(id: string, store: StoreInput): Store | Promise<Store>;
}

export type DateTime = any;
type Nullable<T> = T | null;
