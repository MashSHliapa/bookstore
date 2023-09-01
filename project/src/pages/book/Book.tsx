import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
// components
import { ComeBack } from '../../components/comeBack/ComeBack'
import { CardForBook } from '../../components/cardForBook/CardForBook'
// slice
import { getBook } from '../../redux/bookSlice'
// styles
import './Book.scss'


export function Book(): JSX.Element {

  const { isbn13 } = useParams<string>()
  console.log(isbn13)
  const { data: book, loading, error } = useSelector(state => state.book)
  const dispatch = useDispatch()

    useEffect(() => {
      if (isbn13) {
         dispatch(getBook({isbn13}))
      }
   }, [dispatch, isbn13])

   if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div className="text-danger">{error}</div>
  }

  return (
    <div>
      <ComeBack />
      <CardForBook book={book} />
    </div>
  )
}
