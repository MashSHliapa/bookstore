import { createBrowserRouter} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Books } from './pages/books/Books';
import { Book } from './pages/book/Book';

export const router = createBrowserRouter([
  { element: <Layout/>,
  children:[
    {path: '/',
    element: <Books/>},

    {path: '/selected/:isbn13',
    element: <Book/>},
  ]}
])
