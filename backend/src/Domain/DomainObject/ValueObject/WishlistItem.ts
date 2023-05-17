import { v4 as uuidv4 } from 'uuid';
import { Dayjs } from 'dayjs'

export class WishlistItem {
  id: string;
  name: string;
  addedAt: Date;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.addedAt = new Date();
  }
}
