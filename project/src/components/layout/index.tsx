// core
import { Outlet } from 'react-router-dom'
// components
import { Header } from '../Header/'
import { Footer } from '../Footer'
// styles
import './Layout.scss'

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
