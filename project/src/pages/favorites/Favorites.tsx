// core
import { useState } from 'react'
import { useSelector } from 'react-redux'
// conponents
import { CardForFavorite } from '../../components/cardForFavorite/CardForFavorite'
import { ComeBack } from '../../components/comeBack/ComeBack'
// types
import { RootState } from '../../redux/store'
import { BookResponse } from '../../types/interfaces'
// style
import './Favorites.scss'

export function Favorites() {

  const favoriteCards = useSelector((state: RootState) => {
    return state.favorite.data
  })

  const [favorite, setFavorite] = useState(favoriteCards)

  function renderFavoriteCards() {
    const favoriteCard = favorite.map((item: BookResponse) => <CardForFavorite
      key={item.isbn13}
      book={item} />)
    return favoriteCard
  }

  return (
    <div className="favorite">
      <ComeBack />
      <div className="favorite__title">Favorites</div>
      <div>{renderFavoriteCards()}</div>
    </div>
  )
}
