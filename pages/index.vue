<template>
  <div>
    <h1 class="text-3xl text-blue-700">Welcome to the Store! 📚</h1>
    <p class="italic text-indigo-400">"Your Bookstore online 💻"</p>
    <div class="mt-4">
      <nuxt-link
        class="bg-transparent text-indigo-500 font-semibold py-2 px-4 border border-indigo-500 rounded"
        to="/author"
        >Author Section</nuxt-link
      >
      <nuxt-link
        class="bg-transparent text-indigo-500 font-semibold py-2 px-4 border border-indigo-500 rounded"
        to="/book"
        >Book Section</nuxt-link
      >
    </div>
  </div>
</template>
