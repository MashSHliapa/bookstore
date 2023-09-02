import { configureStore } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
// slices
import { getBookSaga, GET_BOOK, bookReducer } from './bookSlice';
import { booksReducer } from "./booksSlice";
import { favoriteReducer } from '../redux/favoriteSlice';


const sagaMiddleware = createSagaMiddleware()

function* sagas() {
  yield takeEvery(GET_BOOK, getBookSaga)
}

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  }
})

sagaMiddleware.run(sagas)


