
export interface IOrder {
  order_id:       string;
  related_ticket: number;
  table:          string;
  waiter:         string;
  order_status:   string;
  payment_status: string;
  item_list:      ItemList[];
  order_comment:  string;
}

export interface ItemList {
  item_id:      string;
  product_name: string;
  price:        number;
  quantity:     number;
}