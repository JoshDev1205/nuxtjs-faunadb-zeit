import {
  CREATE_AUTHOR,
  SET_ALL_AUTHORS,
  SET_AUTHOR,
  UPDATE_AUTHOR
} from "~/constants/author/mutations-types";

export default {
  async getAllAuthors({ commit }) {
    console.log(this.$axios.defaults)
    const { data } = await this.$axios.get('/api/author')
    commit(SET_ALL_AUTHORS, data)
  },
  async getAuthorById({ commit }, { id }) {
    const { data } = await this.$axios.get(`/api/author/${id}`)
    commit(SET_AUTHOR, data)
  }
}