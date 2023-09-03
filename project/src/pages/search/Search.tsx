// core
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
// components
import { CardForBooks } from "../../components/cardForBooks/CardForBooks"
// redux
import { fetchSearchBooks } from "../../redux/booksSlice"
// types
import { BookResponse } from "../../types/interfaces"
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from "../../redux/store"
// styles
import './Search.scss'

export function Search() {
  const { data: book, loading, error } = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch<ThunkDispatch<BookResponse, null, AnyAction>>()
  const { query } = useParams()

  useEffect(() => {
    dispatch(fetchSearchBooks({ query: query }))
  }, [dispatch, query])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const searchBooks = book.map((item: BookResponse) => <CardForBooks key={item.isbn13} book={item} />)

  return (
    <div className="search">
      <div className="search__title">`{query}` Search results</div>
      <div className="search__data">{searchBooks}</div>
    </div>
  )
}
