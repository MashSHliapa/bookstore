// core
import { useSelector, useDispatch } from 'react-redux'
// components
import { FavoritesCondition } from '../FavoriteCondition'
import { Rating } from '../Raiting'
import { Title } from '../Title/index'
// slices
import { addBookToCart } from '../../redux/cartSlice'
// types
import { BookProps } from '../../types/interfaces'
import { BookResponse } from '../../types/interfaces'
// store
import { RootState } from '../../redux/store'
// styles
import './CardBook.scss'



export function CardBook(props: BookProps): JSX.Element {
  const dispatch = useDispatch()

  const cart = useSelector((state: RootState) => {
    return state.cart.data
  })

  function handleClickAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    const isBookInCart = cart.some((item: BookResponse) => item.isbn13 === props.book.isbn13);
    if (!isBookInCart) {
      dispatch(addBookToCart(props.book));
      event.currentTarget.style.backgroundColor = 'green';
    }
    else {
      event.currentTarget.style.backgroundColor = 'red';
    }
  }

  return (
    <div className="card-book">
      <Title title={props.book.title}/>
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

          <div className={`card-book__preview ${props.book.pdf ? 'd-block' : 'd-none'}`}>
            {props.book.pdf && (
              <a href={props.book.pdf['Free eBook'] || props.book.pdf['Chapter 2'] || props.book.pdf['Chapter 3']} target="_blank">Preview book</a>
            )}
          </div>
        </div>
      </div>
      <div className="book__subtitle">{props.book.subtitle}</div>
    </div>
  )
}
