import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBooks } from '../services/books'
import { requestSearchBooks } from '../services/books'

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  return await requestBooks()
})

const fetchSearchBooks = createAsyncThunk('books/fetchSearchBooks', async ({ query, page = '' }: { query: string, page?: string }) => {
  return await requestSearchBooks(query, page)
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
    pagesCounter: 0,
    limit: 10
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

      if (state.pagesCounter) return
      state.pagesCounter = Math.ceil(action.payload.total / state.limit)
    })
  }
})

export { fetchBooks, fetchSearchBooks }
export const booksReducer = booksSlice.reducer
