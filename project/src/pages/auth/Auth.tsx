// core
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// styles
import './Auth.scss'

export function Auth() {
  return (
    <>
      <nav className="auth">
        <NavLink className="auth__title" to="/auth/sign-in"><div className="auth__sign-in-title">sign in</div></NavLink>
        <NavLink className="auth__title" to="/auth/sign-up"><div className="auth__sign-up-title">sign up</div></NavLink>
      </nav>
      <Outlet />
    </>
  )
}
