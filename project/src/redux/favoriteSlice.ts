// core
import { createSlice } from '@reduxjs/toolkit'
// helpers
import { getCardFromLocalStorage } from '../helpers/getCardFromLocalStorage'
import { setCardFromLocalStorage } from '../helpers/setCardFromLocalStorage'
// types
import { BookResponse } from '../types/interfaces'


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    data: getCardFromLocalStorage('favorite')
  },
  reducers: {
    addBookToFavorite: (state, action) => {
      const favoriteCards = action.payload
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

export const { addBookToFavorite, removeFromFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer

