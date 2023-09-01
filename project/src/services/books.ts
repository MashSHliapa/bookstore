import { client } from "../utils/client";
import { booksEndpoint } from "../api";
import { bookEndpoint } from "../api";

export const requestBooks = async () => {
  const { data } = await client.get(booksEndpoint)
  console.log(data)
  return data.books
}

export const requestBookById = async (isbn13: string) => {
  const { data } = await client.get(bookEndpoint + '/' + isbn13)
  return data
}
