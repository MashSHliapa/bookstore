import './Favorites.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FavoriteCard } from '../../components/favoritesCard/FavoritesCard'

export function Favorites() {

  const favoriteCards = useSelector(state => {
    return state.favorite.data
  })

  const [favorite, setFavorite] = useState(favoriteCards)

  function renderFavoriteCards() {
    const favoriteCard = favorite.map((item) => <FavoriteCard
      key={item.isbn13}
      book={item} />)

    console.log(favoriteCards)
    return favoriteCard
  }

  return (
    <div className="favorite">
      <div className="favorite__title">Favorites</div>
      <div>{renderFavoriteCards()}</div>
    </div>
  )
}
