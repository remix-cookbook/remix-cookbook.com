export interface Post {
  _id: string;
  title: string;
  author: string;
  author_url: string;
  _createdAt?: unknown;
  _updatedAt?: unknown;
  content: unknown;
  slug: {
    current: string;
  };
}

export interface UnsplashUser {
  name: string;
  portfolio_url?: string | null;
}

export interface Picture {
  regular: string;
  small: string;
  alt_description: unknown;
  user: UnsplashUser;
}
