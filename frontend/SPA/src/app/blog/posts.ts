export interface Posts {
  count: number;
  next: string;
  previous: string;
  results: object;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  created_at: string;
  updated_at: string;
}
