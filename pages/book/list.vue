<template>
  <div>
    <h1 class="text-2xl mb-4 text-blue-500 text-center font-bold">
      List of Books
    </h1>
    <table class="w-full text-md bg-white shadow-md rounded">
      <thead>
        <tr class="border-b">
          <th class="text-left py-3 px-5">Title</th>
          <th class="text-left py-3 px-5">Description</th>
          <th class="text-left py-3 px-5">Quantity</th>
          <th class="text-left py-3 px-5">Price</th>
          <th class="text-left py-3 px-5">Author</th>
          <th class="text-left py-3 px-5">Tools</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b hover:bg-orange-100 bg-gray-100"
          v-for="book in books"
          :key="book._id"
        >
          <td class="px-5 py-3">{{ book.title }}</td>
          <td class="px-5 py-3">{{ book.description }}</td>
          <td class="px-5 py-3">{{ book.quantity }}</td>
          <td class="px-5 py-3">{{ book.price }}</td>
          <td class="px-5 py-3">{{ book.author.name }}</td>
          <td class="px-5 py-3 flex">
            <nuxt-link
              class="bg-blue-500 mr-4 text-white text-sm rounded py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              :to="{ name: 'book-id', params: { id: book._id } }"
              >Edit</nuxt-link
            >
            <button
              class="bg-red-500 text-white text-sm rounded py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              @click="deleteBook({ id: book._id })"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ListBooks",
  async fetch({ store }) {
    await store.dispatch("book/getAllBooks");
  },
  computed: {
    ...mapState("book", ["books"])
  },
  methods: {
    ...mapActions("book", ["deleteBook"])
  }
};
</script>

<style lang="scss" scoped></style>
