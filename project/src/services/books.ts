// client
import { client } from '../utils/client'
// api
import { booksEndpoint } from '../api'
import { bookEndpoint } from '../api'
import { searchEndpoint } from '../api'

export const requestBooks = async () => {
  const { data } = await client.get(booksEndpoint)
  return data.books
}

export const requestBookById = async (isbn13: string) => {
  const { data } = await client.get(bookEndpoint + '/' + isbn13)
  return data
}

export const requestSearchBooks = async (query: string, page: string) => {
  const { data } = await client.get(searchEndpoint + '/' + query + '/' + page)
  return data
}
