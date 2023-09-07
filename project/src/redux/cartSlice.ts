// core
import { createSlice } from '@reduxjs/toolkit'
// helpers
import { getCardFromLocalStorage } from '../helpers/getCardFromLocalStorage'
import { setCardFromLocalStorage } from '../helpers/setCardFromLocalStorage'
// types
import { BookResponse } from '../types/interfaces'


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: getCardFromLocalStorage('cart'),
  },
  reducers: {
    addBookToCart: (state, action) => {
      const cart = action.payload
      state.data.push(cart)
      setCardFromLocalStorage('cart', state.data)
    },
    setIncrement: (state, action) => {
      const increment = action.payload
      state.data.push(increment)
      setCardFromLocalStorage('cart', state.data)
    },
    setDecrement: (state, action) => {
      const decrement = state.data.findIndex((item: BookResponse) => item.isbn13 == action.payload.isbn13)
      state.data.splice(decrement, 1)
      setCardFromLocalStorage('cart', state.data)
    }
  },
})

export const { addBookToCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
