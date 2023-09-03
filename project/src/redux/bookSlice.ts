import { BookResponse } from "../types/interfaces"
import { requestBookById } from "../services/books"
import { put } from "redux-saga/effects"
import { createAction, createSlice } from '@reduxjs/toolkit'

export function* getBookSaga({payload: { isbn13 }}: {payload: {isbn13: string}}) {
  yield put(setLoading(true))

  try {
    const payload: BookResponse = yield requestBookById(isbn13)
    console.log(payload)
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
  },
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

export const GET_BOOK = 'book/getBook'

export const getBook = createAction(GET_BOOK)
console.log(getBook)

export const { setLoading, getBookSuccess, setError } = bookSlice.actions
export const bookReducer = bookSlice.reducer

