// images
import bookstore from '../images/bookstore.png'
import like from '../images/like.svg'
import book from '../images/book.svg'
import person from '../images/person.svg'
// styles
import './Header.scss';

export function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <img src={bookstore} width="137" height="29" alt="" />
      </div>
      <div className="header__icons">
        <img src={like} alt="" />
        <img src={book} alt="" />
        <img src={person} alt="" />
      </div>
    </div>
  )
}
