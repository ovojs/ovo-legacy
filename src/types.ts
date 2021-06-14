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
  name: string,
  email: string,
  avatar: string,
  website: string
  content: string,
  browser: string,
  os: string,
  children: Comment[],
}