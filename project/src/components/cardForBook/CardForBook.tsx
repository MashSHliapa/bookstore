// core
import { useSelector, useDispatch } from 'react-redux'
// components
import { FavoritesCondition } from '../favoriteCondition/FavoriteCondition'
import { Rating } from '../raiting/Raiting'
// redux
import { setCart } from '../../redux/cartSlice'
// types
import { CardForBookProps } from '../../types/interfaces'
import { RootState } from '../../redux/store'
import { BookResponse } from '../../types/interfaces'
// styles
import './CardForBook.scss'


export function CardForBook(props: CardForBookProps): JSX.Element {
  const dispatch = useDispatch()

  // Для проверки на наличие такой книги в корзине
  const yourCart = useSelector((state: RootState) => {
    console.log(state)
    return state.cart.data
  })

  function handleClickAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    const isBookInCart = yourCart.some((item: BookResponse) => item.isbn13 === props.book.isbn13);
    if (!isBookInCart) {
      dispatch(setCart(props.book));
      event.currentTarget.style.backgroundColor = 'green';
    }
    else {
      event.currentTarget.style.backgroundColor = 'red';
    }
  }

  return (
    <div className="card-book">
      <div className="card-book__title">{props.book.title}</div>
      <div className="card-book__card-group">
        <div className="card-book__image">
          <div className="card-book__favorite">
            <FavoritesCondition book={props.book} />
          </div>
          <img src={props.book.image} />
        </div>
        <div className="card-book__data">
          <div className="card-book__estimate">
            <div className="card-book__price">{props.book.price}</div>
            <Rating rating={props.book.rating} />
          </div>
          <div className="card-book__price">
          </div>
          <div className="card-book__authors"><b>Authors:</b> {props.book.authors} </div>
          <div className="card-book__publisher"><b>Publisher:</b> props.{props.book.publisher}, {props.book.year}</div>
          <div className="card-book__language"><b>language:</b> {props.book.language}</div>
          <div className="card-book__format"><b>Format:</b> Paper book / ebook (PDF) </div>
          <button type="button" className="btn btn-secondary w-100" onClick={handleClickAddToCart}>add to cart</button>
          <div className="card-book__preview">{props.book.pdf &&
            <a href={props.book.pdf['Free eBook'] || props.book.pdf['Chapter 2'] || '#'} target="_blank">Preview book</a>}</div>
        </div>
      </div>
      <div className="book__subtitle">{props.book.subtitle}</div>
    </div>
  )
}
