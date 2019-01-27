export class Item {
  title: string;
  desc: string;
  completed: boolean;
  tags: object;
  created_at: string;
  updated_at: string;
}

export class ItemList {
  name: string;
  items: object;
}
