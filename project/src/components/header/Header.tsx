// images
import bookstore from '../images/bookstore.png'
import like from '../images/like.svg'
import book from '../images/book.svg'
import person from '../images/person.svg'
import { NavLink } from 'react-router-dom'
// styles
import './Header.scss';

export function Header() {

  return (
    <div className="header">
      <div className="header__title">
      <NavLink to="/"><img src={bookstore} width="137" height="29" alt="" /></NavLink>
      </div>
      <div className="header__icons">
        <img src={like} alt="" />
        <img src={book} alt="" />
        <NavLink to="/auth/sign-in"><img src={person} alt="" className="header__icons-person" /></NavLink>
      </div>
    </div>
  )
}
