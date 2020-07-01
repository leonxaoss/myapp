import { UrlInterface } from './urls.interface';

export interface PhotoInterface {
  alt_description: string;
  categories: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {};
  promoted_at: string;
  sponsorship: {};
  updated_at: string;
  urls: UrlInterface;
  user: {};
  width: number;
}
