import type en from "./locales/en.json";

type Nullable<T> = T | null;

export type Locale = typeof en;

export type ID = string | number;

export type Props = {
  server?: string,
  emoji?: string,
  placeholder?: string,
  timeout?: number,
  locales: Locale
}

export type Emoji = {
  title: string,
  text: string
}

export type EmojiSource = {
  temoji: Emoji[]
}

export type Reply = {
  id:  ID          // reply id
  cid: ID          // comment id the reply refers to.
  rid: ID          // reply id the reply refers to.
  content: string
} & Issuer

export type Comment = {
  id: ID              // comment id
  domain: string
  path: string
  content: string
  browser: string     // reserved
  ctime: string
  os: string          // reserved
  replies: Comment[]
  open?: boolean      // reserved
} & Issuer

export type Repliable<T> = T | Reply

export type Comments = {
  comments: Comment[],
  done: boolean
}

export type Issuer = {
  issuer: string,
  issuer_website: string,
  issuer_email: string
}

export type CommentPostParams = {
  domain: string,
  path: string,
  content: string,
} & Issuer

export type ReplyTo = {
  cid: Nullable<number | string>,
  rid: Nullable<number | string>
}

export type ReplyPostParams = CommentPostParams & ReplyTo;

export type CommentGetParams = {
  domain: string,
  path: string,
  page: number
}

export type ResponseBody = {
  errmsg: string,
}

export type ResponseBodyComment = ResponseBody & Comments;