// components
import { FavoritesCondition } from '../FavoriteCondition'
// types
import { BookProps } from '../../types/interfaces'
// styles
import './CardFavorite.scss'

export function CardFavorite(props: BookProps) {
  return (
    <div className="card-favorite">
      <div className="card-favorite__image">
        <img src={props.book.image} width="200" height="200" alt="" />
      </div>
      <div className="card-favorite__data">
        <div className="card-favorite__title m-1">{props.book.title}</div>
        <div className="card-favorite__subtitle m-1">{props.book.subtitle}</div>
        <div className="card-favorite__estimate m-1 d-flex">
          <div className="card-favorite__price me-5">{props.book.price}</div>
          <div className="card-favorite__stars ms-5 mt-3"><img src="" alt="" /></div>
        </div>
      </div>
      <div className="card-favorite__like"><FavoritesCondition book={props.book} /></div>
    </div>
  )
}
