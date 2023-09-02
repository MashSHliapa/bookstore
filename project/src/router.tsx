import { createBrowserRouter} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Books } from './pages/books/Books';
import { Book } from './pages/book/Book';
import { SignIn } from './pages/signIn/SignIn';
import { SignUp } from './pages/signUp/SignUp';
import { Auth } from './pages/auth/Auth';
import { Favorites } from './pages/favorites/Favorites'

export const router = createBrowserRouter([
  { element: <Layout/>,
  children:[
    {path: '/',
    element: <Books/>},

    {path: '/selected/:isbn13',
    element: <Book/>},

    {path: '/sign-in',
    element: <SignIn/>},

    {path: '/sign-up',
    element: <SignUp/>},

    { // сделать новый layout(auth)
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
    {path: '/favorites',
    element: <Favorites/>}
  ]}
])
