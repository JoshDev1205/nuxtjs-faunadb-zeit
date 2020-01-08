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
}