import { createSlice } from '@reduxjs/toolkit'
import { getCartFromLocalStorage } from '../helpers/getCardFromLocalStorage'
import { setCartFromLocalStorage } from '../helpers/setCardFromLocalStorage'
import { BookResponse } from '../types/interfaces'


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    data: getCartFromLocalStorage('favorite')
  },
  reducers: {
    setFavorite: (state, action) => {
      const favoriteCards = action.payload
      console.log(action)
      console.log(favoriteCards)
      state.data.push(favoriteCards)
      setCartFromLocalStorage('favorite', state.data)
    },
    removeFromFavorite: (state, action) => {
      const findDeletedBookIndex = state.data.findIndex((item: BookResponse) => item.isbn13 == action.payload.isbn13)
      state.data.splice(findDeletedBookIndex, 1)
      setCartFromLocalStorage('favorite', state.data)
    }
  }
})

export const { setFavorite, removeFromFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer

