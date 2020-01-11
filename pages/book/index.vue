<template>
  <div>
    <h1 class="text-3xl text-blue-700">Book Section ✍</h1>
    <div class="mt-4">
      <nuxt-link
        class="bg-transparent text-indigo-500 font-semibold py-2 px-4 border border-indigo-500 rounded"
        to="/book/create"
        >Create Book</nuxt-link
      >
      <nuxt-link
        class="bg-transparent text-indigo-500 font-semibold py-2 px-4 border border-indigo-500 rounded"
        to="/book/list"
        >List Books</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Books"
};
</script>

<style lang="scss" scoped></style>
