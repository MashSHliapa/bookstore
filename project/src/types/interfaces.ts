export interface DataBook {
  title: string;
  subtitle?: string;
  isbn13: string;
  price: string;
  image: string;
  url?: string
}

export interface BooksResponse {
  error?: string;
  total?: string;
  page?: string;
  books: DataBook[]
}

export interface BooksInitialState {
  data: BooksResponse;
  loading: boolean;
  error: null | string
}

export interface BookResponse {
  error?: string;
  title: string;
  subtitle?: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10?: string;
  isbn13: string;
  pages?: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url?: string;
  pdf?: {
    'Free eBook': string,
    'Chapter 2': string
  }
}

export interface BookInitialState {
  data: BookResponse;
  loading: boolean;
  error: null | string
}

export interface CardForBookProps {
  book: BookResponse
}

export interface CardForCartProps {
  book: BookResponse;
  onDelete: () => void;
  onClickDecrement: () => void;
  onClickIncrement: () => void;
  count: number;
  id: string
}


export interface CounterProps {
  onClickIncrement: () => void;
  onClickDecrement: () => void;
  count: number;
  id: string
}
