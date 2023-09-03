// core
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
// helpers
import { setCardFromLocalStorage } from '../../helpers/setCardFromLocalStorage'
import { getCardFromLocalStorage } from '../../helpers/getCardFromLocalStorage'
// redux
import { increment, decrement, setCountValue } from '../../redux/cartSlice'
// components
import { ComeBack } from '../../components/comeBack/ComeBack'
import { CardForCart } from '../../components/cardForCart/CardForCart'
import { TotalPrice } from '../../components/totalPrice/TotalPrice'
// styles
import './Cart.scss'

export function Cart(): JSX.Element {

  const yourCart = useSelector(state => {
    console.log(state)
    return state.cart.data
  })
  const [cart, setCart] = useState(yourCart)

  const count = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  function handleClickDeletePost({ id } = event.target.dataset) {
    const cardDeleted = cart.filter(item => item.isbn13 !== id);
    setCart(cardDeleted)
    setCardFromLocalStorage('cart', cardDeleted)
    getCardFromLocalStorage('cart')
  }

  ///////////Increment
  function handleClickIncrement({ id } = event.target.dataset) {
    console.log('increment')
    console.log(id)
    const item = cart.find(item => item.isbn13 === id)
    if (item) {
      dispatch(setCountValue(count + 1));
      console.log(item);
    }
    if (count === 0) return
    console.log(count);
  }
  ///////////Decrement
  function handleClickDecrement({ id } = event.target.dataset) {
    console.log('decrement')
    console.log(id)
    const item = cart.find(item => item.isbn13 === id)
    if (item) {
      dispatch(setCountValue(count - 1));
      console.log(item);
    }
     if (count === 1) {
      handleClickDeletePost()
    }
    console.log(count);
  }

  function renderCart() {
    const booksInCart = cart.map((item) => <CardForCart
      key={item.isbn13}
      book={item}
      onClickIncrement={() => handleClickIncrement()}
      onClickDecrement={() => handleClickDecrement()}
      id={item.isbn13}
      onDelete={() => handleClickDeletePost()}
      count={count}
    />
    )
    return booksInCart
  }

  return (
    <div className="cart">
      <ComeBack />
      <div className="cart__title">Your Cart</div>
      <div>{renderCart()}</div>
      <TotalPrice count={count} yourCart={cart} />
    </div>
  )
}
