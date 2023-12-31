// components
import { Counter } from '../Counter'
// images
import x from '../images/x.svg'
// types
import { CartProps } from '../../types/interfaces'
// styles
import './CardCart.scss'


export function CardCart(props: CartProps) {

  return (
    <div className="card-cart">
      <div className="card-cart__image">
        <img src={props.book.image} width="200" height="200" alt="" ></img>
      </div>
      <div>
        <div className="card-cart__data">
          <div className="card-cart__description">
            <div className="card-cart__title">{props.book.title}</div>
            <div className="card-cart__subtitle">{props.book.subtitle}</div>
          </div>
          <div className="card-cart__decision">
            <div className="card-cart__price">{props.book.price}</div>
            <div className="card-cart__delete">
              <img src={x} width="40" height="40" alt="" data-id={props.book.isbn13} onClick={props.onDelete} />
            </div>
          </div>
        </div>

        <Counter
          onClickDecrement={props.onClickDecrement}
          onClickIncrement={props.onClickIncrement}
          count={props.count}
          id={props.id} />
      </div>
    </div>
  )
}
