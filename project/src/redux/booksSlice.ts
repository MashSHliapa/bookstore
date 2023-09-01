// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BooksResponse, BooksInitialState } from '../types/interfaces';
import { requestBooks } from '../services/books';

const fetchBooks = createAsyncThunk<BooksResponse>( 'books/fetchBooks', async() => {
  return await requestBooks() as BooksResponse
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  } as BooksInitialState,

  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBooks.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchBooks.rejected, state => {
      state.loading = false
      state.error = 'Что-то пошло не так' as string
    })
  }
})

export { fetchBooks }
export const booksReducer = booksSlice.reducer
