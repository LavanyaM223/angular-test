import { Comment } from './comment';

export class Dish {
  id: string;
  name: string;
  category: string;
  feature: string;
  label: string;
  price: string;
  description: string;
  image: string;
  comments: Comment[];
}
