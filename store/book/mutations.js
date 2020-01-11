import {
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  SET_ALL_BOOKS
} from '~/constants/book/mutations-types'

export default {
  [CREATE_BOOK](state, payload) {
    state.books.push(payload)
  },
  [SET_ALL_BOOKS](state, payload) {
    state.books = payload
  },
  [UPDATE_BOOK](state, payload) {
    const { books } = state
    const newState = books.map(book => {
      if (book._id === payload._id) {
        book = payload
      }

      return book
    })

    state.books = newState
  },
  [DELETE_BOOK](state, payload) {
    const { books } = state

    const newState = books.filter(book => book._id !== payload)

    state.books = newState
  }
}