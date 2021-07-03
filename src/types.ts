type Nullable<T> = T | null;

export type Emoji = {
  title: string,
  text: string
}

export type EmojiSource = {
  temoji: Emoji[]
}

export type Comment = {
  id: number,
  pid: number,
  sid: number,
  content: string,
  browser: string,
  ctime: string,
  os: string,
  user: Nullable<User>,
  children: Comment[],
  open?: boolean
}

export type Comments = {
  comments: Comment[]
}

export type User = {
  name: string,
  website: string,
  email?: string
}