export interface Post {
  id: number,
  title: string,
  userId: number,
  body: string,
  photo?: string
}

export type PhotoUrl = string;
