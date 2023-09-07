// core
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// components
import { CardBooks } from '../../components/CardBooks'
import { Pagination } from '../../components/Pagination'
import { Title } from '../../components/Title'
// redux
import { fetchSearchBooks } from '../../redux/booksSlice'
// store
import { RootState } from '../../redux/store'
// types
import { BookResponse } from '../../types/interfaces'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
// styles
import './Search.scss'


export function Search(): JSX.Element {
  const { data: book, loading, error, pagesCounter, total } = useSelector((state: RootState) => state.books)
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

  const searchBooks = book.map((item: BookResponse) => <CardBooks key={item.isbn13} book={item} />)

  return (
    <div className="search">
      <Title title={`"${query}" Search results`} />
      <div className="search__total mb-5">Found {total}</div>
      <div className="search__data">{searchBooks}</div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <Pagination
            page={Number(page)}
            pagesCounter={pagesCounter}
            query={String(query)} />
        </ul>
      </nav>
    </div>
  )
}
