export type Emoji = {
  title: string,
  text: string
}

export type EmojiSource = {
  temoji: Emoji[]
}

export interface Comment extends User {
  id: number,
  pid: number,
  sid: number,
  content: string,
  browser: string,
  ctime: string,
  os: string,
  children: Comment[],
  open?: boolean
}

export type Comments = {
  comments: Comment[]
}

export type User = {
  name: string,
  website: string
  email?: string,
}