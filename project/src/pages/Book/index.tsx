// core
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
// components
import { ComeBack } from '../../components/ComeBack'
import { CardBook } from '../../components/CardBook/index'
// slice
import { getBook } from '../../redux/bookSlice'
// types
import { RootState } from '../../redux/store'

export function Book(): JSX.Element {

  const { isbn13 } = useParams<string>()
  const { data: book, loading, error } = useSelector((state: RootState) => state.book)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isbn13) {
      dispatch(getBook({ isbn13 }))
    }
  }, [dispatch, isbn13])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div className="text-danger">{error}</div>
  }

  return (
    <div className="book m-auto">
      <ComeBack />
      <CardBook book={book} />
    </div>
  )
}
