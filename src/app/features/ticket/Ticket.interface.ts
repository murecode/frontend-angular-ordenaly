import { Pageable, Sort } from "../util/pageable.interface"

export interface TicketData {
  content:          Ticket[];
  pageable:         Pageable;
  last:             boolean;
  totalElements:    number;
  totalPages:       number;
  first:            boolean;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  empty:            boolean;
}

export interface Ticket {
  id:             number;
  createdAt:      string;
  numberOfPeople: number;
  status:         string;
}

