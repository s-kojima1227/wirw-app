import { WishlistItem } from '../ValueObject/WishlistItem'

export class WishList {
  id: string;
  owner: string;
  items: WishlistItem[];

  constructor(owner: string) {
    this.id = uuidv4();
    this.owner = owner;
    this.items = [];
  }

  addItem(name: string) {
    const item = new WishlistItem(name);
    this.items.push(item);
  }

  removeItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
  }
}
