// core
import { NavLink } from 'react-router-dom'
// images
import bookstore from '../images/bookstore.png'
import like from '../images/like.svg'
import book from '../images/book.svg'
import person from '../images/person.svg'
// components
import { SearchForm } from '../SearchForm'
// styles
import './Header.scss';


export function Header() {

  return (
    <div className="header">
      <div className="header__title">
        <NavLink to="/"><img src={bookstore} width="137" height="29" alt="" /></NavLink>
      </div>
      <SearchForm />
      <div className="header__icons">
        <NavLink to="/favorites"><img src={like} alt="" /></NavLink>
        <NavLink to="/cart"><img src={book} alt="" /></NavLink>
        <NavLink to="/auth/sign-in"><img src={person} alt="" className="header__icons-person" /></NavLink>
      </div>
    </div>
  )
}
