import {
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  SET_ALL_BOOKS
} from '~/constants/book/mutations-types'

export default {
  async getAllBooks({ commit }) {
    const { data } = await this.$axios.get('/api/book')
    commit(SET_ALL_BOOKS, data)
  },
  async deleteBook({ commit }, { id }) {
    await this.$axios.delete(`/api/book/${id}`)
    commit(DELETE_BOOK, id)
  },
  async updateBook({ commit }, { id, book }) {
    const { data } = this.$axios.put(`/api/book/${id}`, { ...book })
    commit(UPDATE_BOOK, data)
  },
  async createBook({ commit }, payload) {
    const { data } = this.$axios.post('/api/book', payload)
    commit(CREATE_BOOK, data)
  }
}