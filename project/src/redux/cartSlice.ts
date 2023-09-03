import { createSlice } from '@reduxjs/toolkit'
// helpers
import { getCardFromLocalStorage } from '../helpers/getCardFromLocalStorage'
import { setCardFromLocalStorage } from '../helpers/setCardFromLocalStorage'


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: getCardFromLocalStorage('cart'),
    value: 1,
  },
  reducers: {
    setCart: (state, action) => {
      console.log(action)
      const cart = action.payload
      state.data.push(cart)
      setCardFromLocalStorage('cart', state.data)
    },
    setCountValue: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { setCart, setCountValue } = cartSlice.actions
export const cartReducer = cartSlice.reducer
