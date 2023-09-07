// core
import { Link } from 'react-router-dom'
// types
import { BookProps } from '../../types/interfaces'
// styles
import './CardBooks.scss'

export function CardBooks(props: BookProps) {
  return (
    <div className="card">
      <div className="card__image-container">
        <Link to={`/selected/${props.book.isbn13}`}>
          <img src={props.book.image} width="200" height="200" alt="" ></img>
        </Link>
      </div>
      <div className="card__title m-1">{props.book.title}</div>
      <div className="card__subtitle m-1">{props.book.subtitle}</div>
      <div className="card__estimate m-1">
        <div className="card__price">{props.book.price}</div>
        <div className="card__price">{props.book.price}</div>
      </div>
    </div >
  )
}
