import {
  CREATE_AUTHOR,
  SET_ALL_AUTHORS,
  SET_AUTHOR,
  UPDATE_AUTHOR
} from "~/constants/author/mutations-types";

export default {
  async getAllAuthors({ commit }) {
    const res = await fetch('/api/author')
    const data = await res.json()
    commit(SET_ALL_AUTHORS, data)
  },
}