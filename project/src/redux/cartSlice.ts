import { createSlice } from '@reduxjs/toolkit';
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
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },

    setCountValue: (state, action) => {
      state.value = action.payload
    }
  },
})


export const { setCart, increment, decrement, setCountValue } = cartSlice.actions
export const cartReducer = cartSlice.reducer
