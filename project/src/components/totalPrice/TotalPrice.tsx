// types
import { BookResponse } from '../../types/interfaces'
// styles
import './TotalPrice.scss'

export function TotalPrice({ count, booksInCart }: { count: number, booksInCart: BookResponse[] }) {

  function totalPrice() {
    const totalPrice = booksInCart.reduce((prev: number, item: BookResponse) => {
      const summWithoutDollars = Number(item.price.split('').slice(1).join(''))
      return (prev + summWithoutDollars)
    }, 0)

    return (totalPrice * count).toFixed(2)
  }

  function vat() {
    const totalPriceValue = totalPrice()
    const vat = Number(totalPriceValue) * 0.2
    return vat.toFixed(2)
  }
  function countTotal() {
    return (Number(totalPrice()) + Number(vat())).toFixed(2)
  }

  function checkOut() {
    alert(`You will pay $ ${countTotal()} for all your books`)
  }

  return (
    <div className="price">
      <div className="price__sum d-flex justify-content-between">Sum total: <div>$ {totalPrice()}</div></div>
      <div className="price__vat d-flex justify-content-between">VAT: <div>$ {vat()}</div></div>
      <div className="price__total d-flex justify-content-between">Total: <div className="price__total-price">$ {countTotal()}</div></div>
      <button type="button" className="btn btn-secondary w-100" onClick={checkOut}>check out</button>
    </div>
  )
}
