export interface DataBook {
  title: string,
  subtitle?: string,
  isbn13: string,
  price: string,
  image: string,
  url?: string
}

export interface BooksResponse {
  books: DataBook[],
  error?: string,
  total?: string,
  page?: string,
}

export interface BooksInitialState {
  data: BooksResponse,
  loading: boolean,
  error: null | string
}

export interface BookResponse {
  error?: string,
  title: string,
  subtitle?: string,
  authors: string,
  publisher: string,
  language: string,
  isbn10?: string,
  isbn13: string,
  pages?: string,
  year: string,
  rating: string,
  desc: string,
  price: string,
  image: string,
  url?: string,
  pdf?: object
}

export interface BookInitialState {
  data: BookResponse,
  loading: boolean,
  error: null | string
}
