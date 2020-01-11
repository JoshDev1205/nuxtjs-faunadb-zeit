import {
  CREATE_AUTHOR,
  SET_ALL_AUTHORS,
  UPDATE_AUTHOR
} from '~/constants/author/mutations-types'

export default {
  [CREATE_AUTHOR](state, payload) {
    state.authors.push(payload)
  },
  [SET_ALL_AUTHORS](state, payload) {
    state.authors = payload
  },
  [UPDATE_AUTHOR](state, payload) {
    const { authors } = state
    const newState = authors.map(author => {
      if (author._id === payload._id) {
        author = payload
      }

      return author
    })

    state.authors = newState
  },
}