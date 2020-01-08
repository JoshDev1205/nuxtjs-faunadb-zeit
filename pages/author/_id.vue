<template>
  <div></div>
</template>

<script>
export default {
  name: "EditAuthor",
  async fetch({ store, params: { id } }) {
    store.dispatch("author/getAuthorById", { id });
  }
};
</script>
