export interface OrderDetailsData {
  content: OrderDetails[];
}

export interface OrderDetails {
  id:       number;
  product:  string;
  quantity: number;
  subtotal: number;
}