// core
import { Outlet } from 'react-router-dom'
// components
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
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
