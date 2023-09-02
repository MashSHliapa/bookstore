import './FavoritesCard.scss'
import { FavoritesCondition } from '../favoriteCondition/FavoriteCondition'

export function FavoriteCard(props) {
  return (
    <div className="favorite-card">
      <div className="favorite-card__image">
        <img src={props.book.image} width="200" height="200" alt="" />
      </div>
      <div className="favorite-card__data">
        <div className="favorite-card__title m-1">{props.book.title}</div>
        <div className="favorite-card__subtitle m-1">{props.book.subtitle}</div>
        <div className="favorite-card__estimate m-1 d-flex">
          <div className="favorite-card__price me-5">{props.book.price}</div>
          <div className="favorite-card__stars ms-5 mt-3"><img src="" alt="" /></div>
        </div>
      </div>
      <div className="favorite-card__like"><FavoritesCondition book={props.book} /></div>
    </div>
  )
}
