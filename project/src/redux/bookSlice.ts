// core
import { put } from 'redux-saga/effects'
import { createAction, createSlice } from '@reduxjs/toolkit'
// services
import { requestBookById } from '../services/books'
// types
import { BookInitialState, BookResponse } from '../types/interfaces'


export function* getBookSaga({payload: { isbn13 }}: {payload: {isbn13: string}}) {
  yield put(setLoading(true))

  try {
    const payload: BookResponse = yield requestBookById(isbn13)
    yield put(getBookSuccess(payload))
  } catch (error) {
    yield put(setError(error))
  }
  yield put(setLoading(false))
}

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    data: {},
    loading: false,
    error: null,
  } as BookInitialState,
  reducers: {
    getBookSuccess: (state, action) => {
      state.data = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const GET_BOOK: string = 'book/getBook'

export const getBook = createAction<string>(GET_BOOK)

export const { setLoading, getBookSuccess, setError } = bookSlice.actions
export const bookReducer = bookSlice.reducer

