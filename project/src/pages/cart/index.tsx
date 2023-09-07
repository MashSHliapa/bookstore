// core
import { useSelector } from 'react-redux'
import { useState } from 'react'
// helpers
import { setCardFromLocalStorage } from '../../helpers/setCardFromLocalStorage'
import { getCardFromLocalStorage } from '../../helpers/getCardFromLocalStorage'
// store
import { RootState } from '../../redux/store'
// components
import { ComeBack } from '../../components/ComeBack'
import { CardCart } from '../../components/CardCart/index'
import { TotalPrice } from '../../components/TotalPrice'
import { Title } from '../../components/Title/index'
// types
import { BookResponse } from '../../types/interfaces'
// styles
import './Cart.scss'


export function Cart(): JSX.Element {

  const data = useSelector((state: RootState) => state.cart.data)
  const [cart, setCart] = useState(data)
  const [count, setCount] = useState(1)

  ///////////Increment
  function handleClickIncrement({ id } = event.target.dataset) {
    const item = cart.find((item: BookResponse) => item.isbn13 === id)
    if (item) {
      setCount(count + 1)
    }
  }

  ///////////Decrement
  function handleClickDecrement({ id } = event.target.dataset) {
    const item = cart.find((item: BookResponse) => item.isbn13 === id)
    if (item) {
      setCount(count - 1)
    }
    if (count === 1) {
      handleClickDeletePost()
    }
  }
  // delete
  function handleClickDeletePost({ id } = event.target.dataset) {
    const cardDeleted = cart.filter((item: BookResponse) => item.isbn13 !== id);
    setCart(cardDeleted)
    setCardFromLocalStorage('cart', cardDeleted)
    getCardFromLocalStorage('cart')
  }

  function renderCartCards() {
    const booksInCart = cart.map((item: BookResponse) => <CardCart
      key={item.isbn13}
      book={item}
      onClickIncrement={() => handleClickIncrement()}
      onClickDecrement={() => handleClickDecrement()}
      id={item.isbn13}
      onDelete={() => handleClickDeletePost()}
      count={count}/>
    )
    return booksInCart
  }

  return (
    <div className="cart">
      <ComeBack />
      <Title title=" Your Cart" />
      <div>{renderCartCards()}</div>
      <TotalPrice count={count} booksInCart={cart} />
    </div>
  )
}
