import {
  CREATE_AUTHOR,
  SET_ALL_AUTHORS,
  SET_AUTHOR,
  UPDATE_AUTHOR
} from "~/constants/author/mutations-types";

export default {
  async getAllAuthors({ commit }) {
    const { data } = await this.$axios.get('/api/author')
    commit(SET_ALL_AUTHORS, data)
  },
  async updateAuthor({ commit }, { id, author }) {
    const { data } = await this.$axios.put(`/api/author/${id}`, { name: author.name, country: author.country })
    commit(UPDATE_AUTHOR, data)
  },
  async createAuthor({ commit }, payload) {
    const res = await this.$axios.post('/api/author', payload)
    commit(CREATE_AUTHOR, payload)
  }
}