<template>
  <div>
    <h1 class="text-2xl mb-4 text-blue-500 text-center">Update Book</h1>
    <form
      @submit.prevent="updateBookData()"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="flex w-full mb-4">
        <div class="w-1/2 pr-8">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            v-model="book.title"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Title"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            v-model="book.description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
          />
        </div>
      </div>
      <div class="flex w-full mb-4">
        <div class="w-1/2 pr-8">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            v-model="book.price"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Price"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Quantity
          </label>
          <input
            v-model="book.quantity"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Quantity"
          />
        </div>
      </div>
      <div class="w-full mb-4">
        <select v-model="book.author._id" class="form-select w-full">
          <option
            v-for="author in authors"
            :key="author._id"
            :value="author._id"
            >{{ author.name }}</option
          >
        </select>
      </div>
      <div class="w-full mt-8 flex justify-between">
        <button
          type="submit"
          class="bg-blue-500 text-white text-base rounded py-3 px-4 rounded focus:outline-none focus:shadow-outline font-bold"
        >
          Done
        </button>
        <Toast :isActive="activeToast" @close="activeToast = false">
          <strong class="font-bold">Awesome</strong>
          <span class="block sm:inline">Your book is updated 😁</span>
        </Toast>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EditBook",
  async asyncData({ params: { id }, $axios }) {
    const { data } = await $axios.get(`/api/book/${id}`);
    return { book: data };
  },
  async fetch({ store }) {
    await store.dispatch("author/getAllAuthors");
  },
  data() {
    return {
      activeToast: false
    };
  },
  watch: {
    activeToast(value) {
      if (!value) {
        this.$router.push("/book/list");
      }
    }
  },
  methods: {
    ...mapActions("book", ["updateBook"]),
    updateBookData() {
      const { id } = this.$route.params;
      this.updateBook({
        id,
        book: this.book
      });
      this.activeToast = true;
    }
  },
  computed: {
    ...mapState("author", ["authors"])
  }
};
</script>

<style lang="scss" scoped></style>
