import { useEffect, useState } from 'react'
import { CardForBooks } from '../../components/cardForBooks/CardForBooks'
import './Books.scss'
import { DataBook } from '../../types/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/booksSlice'

export function Books() {

  // const [books, setBooks] = useState([])

  // useEffect(() => {
  //   fetch(`https://api.itbook.store/1.0/new`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setBooks(data.books)
  //     })
  // })

  const { data: books, loading, error } = useSelector(state => state.books)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  const cardPage1 = books.slice(0, 6).map((item: DataBook) => <CardForBooks key={item.isbn13} book={item} />) as JSX.Element[]


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
