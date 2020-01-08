<template>
  <div>
    <h1 class="text-3xl text-blue-700">Author Section ✍</h1>
    <div class="mt-4">
      <nuxt-link
        class="bg-transparent text-indigo-500 font-semibold py-2 px-4 border border-indigo-500 rounded"
        to="/author/create"
        >Create Author</nuxt-link
      >
      <nuxt-link
        class="bg-transparent text-indigo-500 font-semibold py-2 px-4 border border-indigo-500 rounded"
        to="/author/list"
        >List Author</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Author"
};
</script>
