<template>
  <div>
    <h1 class="text-2xl mb-4 text-blue-500 text-center">Create Author</h1>
    <form
      @submit.prevent="createNewAuthor()"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap"
    >
      <div class="w-1/2 pr-8">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Name
        </label>
        <input
          v-model="author.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="w-1/2">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Country
        </label>
        <input
          v-model="author.country"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Country"
        />
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
          <span class="block sm:inline">Your author is created 😁</span>
        </Toast>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateAuthor",
  data() {
    return {
      activeToast: false,
      author: {
        name: "",
        country: ""
      }
    };
  },
  methods: {
    ...mapActions("author", ["createAuthor"]),
    createNewAuthor() {
      this.createAuthor(this.author);
      this.activeToast = true;
      this.author = { name: "", country: "" };
    }
  }
};
</script>
