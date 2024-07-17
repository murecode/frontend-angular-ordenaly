import { Pageable, Sort } from "../../shared/util/pageable.interface"

export interface ProductData {
  content:          Product[];
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

export interface Product {
  id?:         number;
  title:       string;
  description: string;
  imageUrl:    string;
  price:       number;
  inStock:     boolean;
}