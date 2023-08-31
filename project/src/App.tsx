import './App.scss'
import { RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux';
import { router } from './router';
import { Layout } from './components/layout/Layout';

export function App() {
  return (

    // <Provider store={store}>
    //   <RouterProvider router={router}/>
    // </Provider>
    <>
      <RouterProvider router={router}/>
    </>
  )
}
