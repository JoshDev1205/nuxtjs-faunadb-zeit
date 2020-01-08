<template>
  <div>
    <h1 class="text-2xl mb-4 text-blue-500 text-center">Author's List</h1>
    <table class="w-full text-md bg-white shadow-md rounded">
      <thead>
        <tr class="border-b">
          <th class="text-left py-3 px-5">Name</th>
          <th class="text-left py-3 px-5">Country</th>
          <th class="text-left py-3 px-5">Tools</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b hover:bg-orange-100 bg-gray-100"
          v-for="author in authors"
          :key="author._id"
        >
          <td class="px-5 py-3">{{ author.name }}</td>
          <td class="px-5 py-3">{{ author.country }}</td>
          <td class="px-5 py-3">
            <nuxt-link
              class="bg-blue-500 text-white text-sm rounded py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              :to="{ name: 'author-id', params: { id: author._id } }"
              >Edit</nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListAuthors",
  async fetch({ store }) {
    await store.dispatch("author/getAllAuthors");
  },
  computed: {
    ...mapState("author", ["authors"])
  }
};
</script>
