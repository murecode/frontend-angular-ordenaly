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

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  unpaged:    boolean;
  paged:      boolean;
}

export interface Sort {
  empty:    boolean;
  unsorted: boolean;
  sorted:   boolean;
}