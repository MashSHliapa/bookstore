// core
import { createBrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// components
import { Layout } from './components/Layout'
import { Books } from './pages/Books'
import { Book } from './pages/Book'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Auth } from './pages/Auth'
import { Favorites } from './pages/Favorites'
import { Cart } from './pages/Cart'
import { Search } from './pages/Search'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/books/pages/1" replace={true} />
      },
      {
        path: '/books/pages/:pageNumber',
        element: <Books />
      },

      {
        path: '/selected/:isbn13',
        element: <Book />
      },

      {
        path: '/sign-in',
        element: <SignIn />
      },

      {
        path: '/sign-up',
        element: <SignUp />
      },

      {
        element: <Auth />,
        path: '/auth',
        children: [
          {
            path: '/auth/sign-up',
            element: <SignUp />
          },
          {
            path: '/auth/sign-in',
            element: <SignIn />
          },
        ]
      },

      {
        path: '/favorites',
        element: <Favorites />
      },

      {
        path: '/cart',
        element: <Cart />
      },

      {
        path: '/search/:query/:page',
        element: <Search />
      },
    ]
  }
])
