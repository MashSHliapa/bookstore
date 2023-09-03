import x from '../images/x.svg'
import { Counter } from '../counter/Counter'
import './CardForCart.scss'


export function CardForCart(props) {

  return (
    <div className="cart-card">
      <div className="cart-card__image">
        <img src={props.book.image} width="200" height="200" alt="" ></img>
      </div>
      <div>
        <div className="cart-card__data">
          <div className="cart-card__description">
            <div className="cart-card__title">{props.book.title}</div>
            <div className="cart-card__subtitle">{props.book.subtitle}</div>
          </div>
          <div className="cart-card__decision">
            <div className="cart-card__price">{props.book.price}</div>
            <div className="cart-card__delete">
              <img src={x} width="40" height="40" alt="" data-role="delete" data-id={props.book.isbn13} onClick={props.onDelete} />
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
