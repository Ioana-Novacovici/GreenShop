import {Item} from "./item";

export interface Order {
  id: string;
  name: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  totalPrice: number;
  cartItemsNumber: number;
  cartItems: Item[];
}
