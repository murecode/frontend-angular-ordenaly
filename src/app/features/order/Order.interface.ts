import { Pageable, Sort } from "../../shared/util/pageable.interface"

export interface OrderData {
  content:          Order[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  first:            boolean;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  empty:            boolean;
}

export interface Order {
  order:           number;
  ticket:          number;
  createdAt:       string;
  waiter:          string;
  table:           string;
  numberOfPeople:  number;
  isOrderComplete: boolean;
  paymentStatus:   string;
}