// core
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/booksSlice'
import { RootState } from '../../redux/store'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
// components
import { CardForBooks } from '../../components/cardForBooks/CardForBooks'
// types
import { BookResponse } from '../../types/interfaces'
import { BooksResponse } from '../../types/interfaces'
// styles
import './Books.scss'

export function Books() {

  const { data: books, loading, error } = useSelector((state: RootState) => state.books)

  const dispatch = useDispatch<ThunkDispatch<BooksResponse, null, AnyAction>>()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  const cardPage1 = books.slice(0, 6).map((item: BookResponse) => <CardForBooks key={item.isbn13} book={item} />) as JSX.Element[]


  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div className="text-danger">{error}</div>
  }

  return (
    <div className="books">
      <div className="books__title">New Releases Books</div>
      <ul className="books__list">
        {cardPage1}
      </ul>
    </div>
  )
}
