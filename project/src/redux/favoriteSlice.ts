import { createSlice } from '@reduxjs/toolkit'
import { getCardFromLocalStorage } from '../helpers/getCardFromLocalStorage'
import { setCardFromLocalStorage } from '../helpers/setCardFromLocalStorage'
import { BookResponse } from '../types/interfaces'


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    data: getCardFromLocalStorage('favorite')
  },
  reducers: {
    setFavorite: (state, action) => {
      const favoriteCards = action.payload
      console.log(action)
      console.log(favoriteCards)
      state.data.push(favoriteCards)
      setCardFromLocalStorage('favorite', state.data)
    },
    removeFromFavorite: (state, action) => {
      const bookIndexDeleted = state.data.findIndex((item: BookResponse) => item.isbn13 == action.payload.isbn13)
      state.data.splice(bookIndexDeleted, 1)
      setCardFromLocalStorage('favorite', state.data)
    }
  }
})

export const { setFavorite, removeFromFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer

