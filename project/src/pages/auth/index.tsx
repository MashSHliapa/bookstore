// core
import { Outlet, NavLink } from 'react-router-dom'
// styles
import './Auth.scss'

export function Auth() {

  function getLinkClass({ isActive: isActive }: { isActive: boolean }) {
    return isActive ? 'nav-link active' : 'nav-link'
  }
  return (
    <div className="">
      <ul className="nav nav-underline auth">
        <li className="nav-item auth__title">
          <NavLink className={getLinkClass} to="/auth/sign-in">sign in</NavLink>
        </li>
        <li className="nav-item auth__title">
          <NavLink className={getLinkClass} to="/auth/sign-up">sign up</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

