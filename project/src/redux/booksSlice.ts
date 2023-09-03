import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBooks } from '../services/books'
import { requestSearchBooks } from '../services/books'

const fetchBooks = createAsyncThunk( 'books/fetchBooks', async() => {
  return await requestBooks()
})

const fetchSearchBooks = createAsyncThunk('books/fetchSearchBooks', async({query}) => {
  return await requestSearchBooks(query)
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },

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

    // search
    builder.addCase(fetchSearchBooks.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload.books
    })
  }
})

export { fetchBooks, fetchSearchBooks }
export const booksReducer = booksSlice.reducer
