// core
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './router'
import { store } from './redux/store'
// styles
import './App.scss'

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
