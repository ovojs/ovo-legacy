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

export type Comment = {
  id: ID,
  cid: ID,         // null if it is a comment, otherwise the ID of a replied comment.
  rid: ID,         // null if it is a reply to a comment, otherwise the ID of a replied reply.
  domain: string,
  path: string,    // domain and path work as sid corresponded to the web page.
  content: string,
  browser: string, // reserved
  ctime: string,
  os: string,      // reserved
  user: Nullable<User>,
  children: Comment[],
  open?: boolean   // reserved
}

export type Comments = {
  comments: Comment[],
  done: boolean
}

export type User = {
  name: string,
  website: string,
  email?: string
}

export type CommentPostParams = {
  domain: string,
  path: string,
  content: string,
  user: User
}

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