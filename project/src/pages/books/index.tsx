// core
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { useParams } from 'react-router-dom'
// store
import { RootState } from '../../redux/store'
// slices
import { fetchBooks } from '../../redux/booksSlice'
// components
import { CardBooks } from '../../components/CardBooks/index'
import { PaginationBooks } from '../../components/PaginationBooks'
import { Title } from '../../components/Title'
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

  const { pageNumber } = useParams()

  const booksPage1 = books.slice(0, 6).map((item: BookResponse) => <CardBooks key={item.isbn13} book={item} />) as JSX.Element[]
  const booksPage2 = books.slice(6, 12).map((item: BookResponse) => <CardBooks key={item.isbn13} book={item} />) as JSX.Element[]
  const booksPage3 = books.slice(12, 18).map((item: BookResponse) => <CardBooks key={item.isbn13} book={item} />) as JSX.Element[]
  const booksPage4 = books.slice(18, 20).map((item: BookResponse) => <CardBooks key={item.isbn13} book={item} />) as JSX.Element[]

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div className="text-danger">{error}</div>
  }

  return (
    <div className="books">
      <Title title={"New Releases Books"} />
      <ul className="books__list">
        {pageNumber && parseInt(pageNumber) == 1 ? [booksPage1] : ''}
        {pageNumber && parseInt(pageNumber) == 2 ? [booksPage2] : ''}
        {pageNumber && parseInt(pageNumber) == 3 ? [booksPage3] : ''}
        {pageNumber && parseInt(pageNumber) == 4 ? [booksPage4] : ''}
      </ul>
      <nav aria-label="Page navigation example m-auto">
        <ul className="pagination">
          <PaginationBooks />
        </ul>
      </nav>
    </div>
  )
}
