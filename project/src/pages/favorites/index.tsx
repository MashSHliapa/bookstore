// core
import { useSelector } from 'react-redux'
// conponents
import { CardFavorite } from '../../components/CardFavorite/index'
import { ComeBack } from '../../components/ComeBack'
import { Title } from '../../components/Title'
// store
import { RootState } from '../../redux/store'
// types
import { BookResponse } from '../../types/interfaces'
// style
import './Favorites.scss'

export function Favorites() {

  const {data: book} = useSelector((state: RootState) => {
    return state.favorite
  })


  function renderFavoriteCards() {
    const favoriteCard = book.map((item: BookResponse) => <CardFavorite
      key={item.isbn13}
      book={item} />)
    return favoriteCard
  }

  return (
    <div className="favorite">
      <ComeBack />
      <Title title="Favorites" />
      <div>{renderFavoriteCards()}</div>
    </div>
  )
}
