// core
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
// components
import { CardForBooks } from "../../components/cardForBooks/CardForBooks"
import { Pagination } from "../../components/pagination/Pagination"
// redux
import { fetchSearchBooks } from "../../redux/booksSlice"
// types
import { BookResponse } from "../../types/interfaces"
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from "redux"
import { RootState } from "../../redux/store"
// styles
import './Search.scss'

export function Search(): JSX.Element {
  const { data: book, loading, error, pagesCounter } = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch<ThunkDispatch<BookResponse, null, AnyAction>>()
  const { query, page } = useParams()

  useEffect(() => {
    dispatch(fetchSearchBooks({ query: query, page: page }))
  }, [dispatch, query, page])


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
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <Pagination renderPagination={() => renderPagination()}
            page={page}
            pagesCounter={pagesCounter}
            query={query} />
        </ul>
      </nav>
    </div>
  )
}
