import { createBrowserRouter} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Books } from './pages/books/Books';

export const router = createBrowserRouter([
  { element: <Layout/>,
  children:[
    {path: '/',
    element: <Books/>},
  ]}
])
